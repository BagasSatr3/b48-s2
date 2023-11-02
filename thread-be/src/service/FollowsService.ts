import { Repository } from "typeorm";
import { Follow } from "../entities/Follows";
import { AppDataSource } from "../data-source";
import { User } from "../entities/Users";

class FollowsService {
    private readonly followRepository: Repository<Follow> = AppDataSource.getRepository(Follow)

    private readonly userRepository: Repository<User> = AppDataSource.getRepository(User)

    async find(loginSession: any, queryType?: string, queryLimit?: number): Promise<any> {
        try {
            let follows: Follow[]

            if(queryType === "followings") {
                follows = await this.followRepository.find({
                    take: queryLimit,
                    where: {
                        follower: {
                            id: loginSession.userId
                        }
                    },
                    relations: ["followed", "follower"]
                })

                return follows.map((follow) => ({
                    id: follow.id,
                    user_id: follow.followed.id,
                    username: follow.followed.username,
                    full_name: follow.followed.full_name,
                    email: follow.followed.email,
                    picture: follow.followed.profile_picture,
                    description: follow.followed.profile_description,
                    is_followed: true
                }))
            } else if (queryType === "followers") {
                follows = await this.followRepository.find({
                    take: queryLimit,
                    where: {
                        followed: {
                            id: loginSession.userId
                        }
                    },
                    relations: ["followed", "follower"]
                })

                return await Promise.all(
                    follows.map(async (follow) => {
                        const isFollowed = await this.followRepository.count({
                            where: {
                                follower: {
                                    id: loginSession.userId
                                },
                                followed: {
                                    id: follow.follower.id
                                }
                            }
                        })

                        return {
                            id: follow.id,
                            user_id: follow.follower.id,
                            username: follow.follower.username,
                            full_name: follow.follower.full_name,
                            email: follow.follower.email,
                            picture: follow.follower.profile_picture,
                            description: follow.follower.profile_description,
                            is_followed: isFollowed > 0
                        }
                    })
                )
            }

            return {
                message: `Please specifu valid query "type" (followers / followings)`
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    // async create(reqBody: any, loginSession: any): Promise<any> {
    //     try {
    //         const isFollowExist = await this.followRepository.count({
    //             where: { 
    //                 follower: {
    //                     id: loginSession.userId
    //                 },
    //                 followed: {
    //                     id: reqBody.followed_user_id
    //                 }
    //             }
    //         })

    //         if (isFollowExist > 0) {
    //             throw new Error("You already follow this user!")
    //         }

    //         if (reqBody.followed_user_id === loginSession.userId) {
    //             throw new Error("You can't follow yourself!")
    //         }

    //         const isUserExist = await this.userRepository.count({
    //             where: {
    //                 id: reqBody.followed_user_id
    //             }
    //         })

    //         if (isUserExist <= 0) {
    //             throw new Error("this user doesn't exist!")
    //         }

    //         const follow = this.followRepository.create({
    //             follower: {
    //                 id: loginSession.userId
    //             },
    //             followed: {
    //                 id: reqBody.followed_user_id
    //             }
    //         })

    //         await this.followRepository.save(follow)

    //         return {
    //             message: "You follow this user!",
    //             follow: follow
    //         }

    //     } catch(error) {
    //         throw new Error(error.message)
    //     }
    // } 

    // async delete(followedUserId: number, loginSession: any): Promise<any> {
    //     try {
    //         const follow = await this.followRepository.findOne({
    //             where: {
    //                 follower: {
    //                     id: loginSession.userId
    //                 },
    //                 followed: {
    //                     id: followedUserId
    //                 }
    //             }
    //         })

    //         if(!follow) {
    //             throw new Error("You didn't follow this user!")
    //         }

    //         await this.followRepository.delete({
    //             id:follow.id
    //         })

    //         return {
    //             message: "You unfollow this user!",
    //             follow: follow
    //         }
    //     } catch (error) {
    //         throw new Error(error.message)
    //     }
    // }

    async getFollowersAndFollowings(userId: number): Promise<{ followers: User[], followings: User[] }> {
        const userRepository = this.userRepository;
        const followRepository = this.followRepository;
      
        try {
          // Fetch the user for whom you want to get followers and followings
          const user = await userRepository.findOne({
            where: {
                id: userId,
            },
          });
      
          if (!user) {
            throw new Error("User not found");
          }
      
          // Get the followers of the user
          const followers = await followRepository.find({
            where: { followed: user },
            relations: ["follower"],
          });
      
          // Get the users being followed by the user
          const followings = await followRepository.find({
            where: { follower: user },
            relations: ["followed"],
          });
      
          return {
            followers: followers.map((follow) => follow.follower),
            followings: followings.map((follow) => follow.followed),
          };
        } catch (error) {
          throw new Error(`Unable to retrieve followers and followings: ${error.message}`);
        }
      }
      

    async followUser(followerId: number, followedId: number): Promise<void> {
        const userRepository = this.userRepository;
        const followRepository = this.followRepository;
      
        const follower = await userRepository.findOne({
            where: {
                id: followerId
            }
        });
        const followed = await userRepository.findOne({
            where: {
                id: followedId
            }
        });
      
        if (!follower || !followed) {
          throw new Error("Follower or followed user not found");
        }
      
        const existingFollow = await followRepository.findOne({ 
            where: {
                followed: followed,
                follower: follower,
            }
         });
      
        if (existingFollow) {
          throw new Error("User is already being followed");
        }
      
        const follow = new Follow();
        follow.follower = follower;
        follow.followed = followed;
      
        await followRepository.save(follow);
      }
      
      // Function to unfollow a user
      async unfollowUser(followerId: number, followedId: number): Promise<void> {
        const followRepository = this.followRepository;
      
        const follow = await followRepository.findOne({ 
            where: {
                follower: {
                    id: followerId,
                },
                followed: {
                    id: followedId,
                },
            },
         });
      
        if (!follow) {
          throw new Error("User is not being followed");
        }
      
        await followRepository.remove(follow);
      }
      
      
}

export default new FollowsService()