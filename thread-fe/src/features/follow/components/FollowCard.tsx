import { IFollow } from "@/interface/follow";
import { API } from "@/libs/api";
import { SET_FOLLOW } from "@/stores/rootReducer";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface User {
    id: number;
    full_name: string;
    username: string;
    description: string;
    picture?: string;
    is_followed: boolean;
  }

export function FollowCard({ user, currentUser, onFollowToggle }: { user: User, currentUser: any, onFollowToggle: () => void }) {
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        // Check if the user is already followed by the current user
        const isFollowed = currentUser.followings.some((followedUser: any) => followedUser.id === user.id);
        setIsFollowing(isFollowed);
      }, [currentUser.followings, user.id]);

      const handleFollowToggle = async () => {
        try {
          if (isFollowing) {
            // Unfollow the user
            await API.delete(`/api/v1/follow/${user.id}`);
          } else {
            // Follow the user
            await API.post(`/api/v1/follow/${user.id}`);
          }
          // Toggle the following state
          setIsFollowing(!isFollowing);
          // Notify the parent component to refresh the user list
          onFollowToggle();
        } catch (error) {
          console.error("Error toggling follow:", error);
        }
      };
    
    // const dispatch = useDispatch()
    // async function handleFollow(id: number, followedUserId: number, isFollowed: boolean) {
    //     try {    
    //         if (!isFollowed) {
    //             await API.post(`/follow`, {followed_user_id: followedUserId})
    //             dispatch(SET_FOLLOW({ id: id, isFollowed: isFollowed}))
    //         } else {
    //             await API.delete(`/follow/${followedUserId}`)
    //             dispatch(SET_FOLLOW({ id: id, isFollowed: isFollowed}))
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            <Box display={"flex"} width={"100%"} padding={"20px 0px"}>
                <Image src={user.picture ?? "/user-placeholder.png"} width={"50px"} height={"50px"} objectFit={"cover"} borderRadius={"50%"} marginRight={"5%"}></Image>

                <Box display={"flex"} width={"100%"}>
                    <Box display={"flex"} flexDirection={"column"} flex={2}>
                        <Box display={"flex"}>
                            <Text color={"white"}>{user.full_name}</Text>
                        </Box>
                        <Text color="grey">@{user.username}</Text>
                        <Text color={"white"}>{user.description}</Text>
                    </Box>
                    <Box flex={1} display={"flex"} justifyContent={"flex-end"}>
                        <Button onClick={() => handleFollowToggle()} backgroundColor={user.is_followed? "gray" : "white"}>
                            {user.is_followed? "Following" : "Follow"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}