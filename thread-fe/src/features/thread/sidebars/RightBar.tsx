import { FollowCard } from "@/features/follow"
import { ProfileCard } from "@/features/profile"
import { API } from "@/libs/api"
import { GET_FOLLOWS } from "@/stores/rootReducer"
import { RootState } from "@/stores/types/rootState"
import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export function RightBar() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the current user data
    API.get("/api/currentUser").then((response) => {
      setCurrentUser(response.data);
    });

    // Fetch a list of users
    API.get("/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleFollowToggle = () => {
    // Refresh the user list after a follow/unfollow action
    API.get("/api/users").then((response) => {
      setUsers(response.data);
    });
  };
  // const [follows, setFollows] = useState<IFollow[]>([])
  // const dispatch = useDispatch()
  // const followState = useSelector((state: RootState) => state.follow.followState)
  // async function getUsers() {
  //   const response = await API.get(`/user`)
  //   setFollows(response.data)
  // }

  // useEffect(() =>{
  //   getUsers()
  // }, [])

    // const follows = useSelector((state: RootState) => state.follow.follows)

    // async function getFollowData() {
    //     const response = await API.get(`/follows?type=${followState}`)
    //     dispatch(GET_FOLLOWS(response.data))
    // }

    // useEffect(() => {
    //     getFollowData()
    // }, [followState])

    return (
        <>
        <Box p={3} w={''} >
        <ProfileCard/>
        
        <br />

        
        <Box backgroundColor={'blackAlpha.400'} rounded={'lg'}>
            <Box p={3}>
            {users.map((user) => (
              <FollowCard
                key={user}
                user={user}
                currentUser={currentUser}
                onFollowToggle={handleFollowToggle}
              />
            ))}
            </Box>
        </Box>

      </Box>
      </>
    )
}