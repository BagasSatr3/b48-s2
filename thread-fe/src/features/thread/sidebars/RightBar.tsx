// import { FollowCard } from "@/features/follow";
// import { ProfileCard } from "@/features/profile";
// import { API } from "@/libs/api";
// import { RootState } from "@/stores/types/rootState";
// import { Box } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// interface User {
//   id: number;
//   full_name: string;
//   username: string;
//   description: string;
//   picture?: string;
//   isFollowing: boolean;
// }

// export function RightBar() {
//   // const [currentUser, setCurrentUser] = useState<User>();
//   // const [users, setUsers] = useState([]);

//   // const auth = useSelector((state: RootState) => state.auth);

  

//   // async function getUser() {
//   //   try {
//   //     console.log("auth", auth)
//   //     const userResponse = await API.get(`/user/${auth.id}`);
//   //     console.log("nanna", userResponse.data)

//   //     setCurrentUser(userResponse.data);

//   //     const userListResponse = await API.get("/user");
//   //     setUsers(userListResponse.data);
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }

  

//   // const handleFollowToggle = async () => {
//   //   try {
//   //     const userListResponse = await API.get("/user");
//   //     setUsers(userListResponse.data);
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // };

//   // useEffect(() => {
//   //   getUser();
//   // }, []);

//   const [follows, setFollows] = useState<IFollow[]>([])
//   const dispatch = useDispatch()
//   async function getUsers() {
//     const response = await API.get(`/user`)
//     setFollows(response.data)
//   }

//   useEffect(() =>{
//     getUsers()
//   }, [])

//     const follows = useSelector((state: RootState) => state.follow.follows)

//     async function getFollowData() {
//         const response = await API.get(`/follows?type=${followState}`)
//         dispatch(GET_FOLLOWS(response.data))
//     }

//     useEffect(() => {
//         getFollowData()
//     }, [followState])
    

//     // return (
//     //     <>
//     //     <Box p={3} w={''} >
//     //     <ProfileCard/>
        
//     //     <br />

        
//     //     <Box backgroundColor={'blackAlpha.400'} rounded={'lg'}>
//     //         <Box p={3}>
//     //         {currentUser ? (
//     //           users.map((user) => (
//     //             <FollowCard
//     //               user={user}
//     //               currentUser={currentUser}
//     //               onFollowToggle={handleFollowToggle}
//     //             />
//     //           ))
//     //         ) : (
//     //           // Render a loading indicator or message
//     //           <div>Loading...</div>
//     //         )}
//     //         </Box>
//     //     </Box>

//     //   </Box>
//     //   </>
//     // )

//     return (
//       <>
//           <Box display={"flex"} >
//               <Tabs isFitted variant={"enclosed"} width={"43em"} marginTop={"20px"}>
//                   <TabList mb={"1em"}>
//                       <Tab color={"white"} onClick={() => dispatch(SET_FOLLOW_STATE("followers"))}>
//                           Followers
//                       </Tab>
//                       <Tab color={"white"} onClick={() => dispatch(SET_FOLLOW_STATE("followings"))}>
//                           Followings
//                       </Tab>
//                   </TabList>
//                   <TabPanels>
//                       <TabPanel>
//                           {follows.map((follow, index) => (
//                               <FollowCard 
//                                   key={index}
//                                   id={follow.id}
//                                   user_id={follow.user_id}
//                                   full_name={follow.full_name}
//                                   username={follow.username}
//                                   email={follow.email}
//                                   picture={follow.picture}
//                                   description={follow.description}
//                                   is_followed={follow.is_followed}
//                               />
//                           ))}
//                       </TabPanel>
//                       <TabPanel>
//                           {follows.map((follow, index) => (
//                               <FollowCard 
//                                   key={index}
//                                   id={follow.id}
//                                   user_id={follow.user_id}
//                                   full_name={follow.full_name}
//                                   username={follow.username}
//                                   email={follow.email}
//                                   picture={follow.picture}
//                                   description={follow.description}
//                                   is_followed={follow.is_followed}
//                               />
//                           ))}
//                       </TabPanel>
//                   </TabPanels>
//               </Tabs>
//           </Box>
//       </>
//   )
// }