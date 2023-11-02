// import { IFollow } from "@/interface/follow";
// import { API } from "@/libs/api";
// import { SET_FOLLOW } from "@/stores/rootReducer";
// import { Box, Button, Image, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

// interface User {
//   id: number;
//   full_name: string;
//   username: string;
//   description: string;
//   picture?: string;
//   isFollowing: boolean;
// }

// export function FollowCard({
//   user,
//   currentUser,
//   onFollowToggle,
// }: {
//   user: User;
//   currentUser: any;
//   onFollowToggle: () => void;
// }) {
//   const [isFollowing, setIsFollowing] = useState(false);

//   console.log("wawawa", currentUser)


//   const handleFollowToggle = async () => {
//     try {
//       if (isFollowing) {
//         // Unfollow the user
//         await API.delete(`/follow/${user.id}`);
//       } else {
//         // Follow the user
//         await API.post(`/follow/${user.id}`);
//       }
//       // Toggle the following state based on the previous value
//       setIsFollowing((prevIsFollowing) => !prevIsFollowing);
//       // Notify the parent component to refresh the user list
//       onFollowToggle();
//     } catch (error) {
//       console.error("Error toggling follow:", error);
//     }
//   };
  

//   useEffect(() => {
//     if (currentUser && currentUser.followings) {
//       const isFollowed = currentUser.followings.some((followedUser: any) => {
//         return followedUser.id === user.id;
//       });
//       setIsFollowing(isFollowed);
//     }
//   }, [currentUser, user.id]);

//   return (
//     <>
//       <Box display={"flex"} width={"100%"} padding={"20px 0px"}>
//         <Image
//           src={user?.picture ?? "/user-placeholder.png"}
//           width={"50px"}
//           height={"50px"}
//           objectFit={"cover"}
//           borderRadius={"50%"}
//           marginRight={"5%"}
//         ></Image>

//         <Box display={"flex"} width={"100%"}>
//           <Box display={"flex"} flexDirection={"column"} flex={2}>
//             <Box display={"flex"}>
//               <Text color={"white"}>{user?.full_name}</Text>
//             </Box>
//             <Text color="grey">@{user?.username}</Text>
//             <Text color={"white"}>{user?.description}</Text>
//           </Box>
//           <Box flex={1} display={"flex"} justifyContent={"flex-end"}>
//           <Button
//             onClick={() => handleFollowToggle()}
//             backgroundColor={isFollowing ? "white" : "gray"} // Change user?.isFollowing to isFollowing
//           >
//             {isFollowing ? "Following" : "Follow"} 
//           </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }


import { IFollow } from "@/interface/follow";
import { API } from "@/libs/api";
import { SET_FOLLOW } from "@/stores/rootReducer";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export function FollowCard(props: IFollow) {
    const dispatch = useDispatch()
    async function handleFollow(id: number, followedUserId: number, isFollowed: boolean) {
        try {
            if (!isFollowed) {
                await API.post(`/follow`, {followed_user_id: followedUserId})
                dispatch(SET_FOLLOW({ id: id, isFollowed: isFollowed}))
            } else {
                await API.delete(`/follow/${followedUserId}`)
                dispatch(SET_FOLLOW({ id: id, isFollowed: isFollowed}))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Box display={"flex"} width={"100%"} padding={"20px 0px"}>
                <Image src={props.picture ?? "/user-placeholder.png"} width={"50px"} height={"50px"} objectFit={"cover"} borderRadius={"50%"} marginRight={"5%"}></Image>

                <Box display={"flex"} width={"100%"}>
                    <Box display={"flex"} flexDirection={"column"} flex={2}>
                        <Box display={"flex"}>
                            <Text color={"white"}>{props.full_name}</Text>
                        </Box>
                        <Text color="grey">@{props.username}</Text>
                        <Text color={"white"}>{props.description}</Text>
                    </Box>
                    <Box flex={1} display={"flex"} justifyContent={"flex-end"}>
                        <Button onClick={() => handleFollow(props.id, props.user_id, props.is_followed)} backgroundColor={props.is_followed? "gray" : "white"}>
                            {props.is_followed? "Following" : "Follow"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
