// import { ThreadDetail } from './features/thread'
import { Pages } from './pages'
import { Routes, Route, useNavigate, Outlet} from "react-router-dom";
import { Detail } from './pages/home/Detail';
import { useEffect, useState } from 'react';
import { API, setAuthToken } from './libs/api';
import { useDispatch } from 'react-redux';
import { AUTH_CHECK, AUTH_ERROR } from './stores/rootReducer';
import { Follow, Profile, Search, Thread } from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ProfileEdit } from './pages/home/ProfileEdit';
import { RootState } from './stores/types/rootState';
import { useSelector } from 'react-redux';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const auth = useSelector((state: RootState) => state.auth);

  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function authCheck() {
    try {
      setAuthToken(localStorage.token)
      const response = await API.get(`/auth/check/${auth.id}`)
      console.log("auth check berhasil", response)
      dispatch(AUTH_CHECK(response.data))
      setIsLoading(false)
      return <Outlet/>  
    } catch (err) {
      dispatch(AUTH_ERROR())
      console.log("auth error:", err)
      setIsLoading(false)
      navigate('/login')
      return <Outlet/>  
      
    }
  }

  useEffect(()=> {
    if(localStorage.token) {
      setIsLoading(false)
      authCheck()
    } else {
      setIsLoading(false)
      // navigate('/login')
    }
  }, [])

  // function AuthRoute({ isLogin }: {isLogin:boolean}) {
  //   if (isLogin) {
  //     return <Outlet/>
  //   } else {
  //     return <Navigate to={"/login"}/>
  //   }
  // }

  // function IsLogin() {
  //   if (auth.data.username) {
  //     return <Outlet/>  
  //   } else {
  //     return <Outlet/>  
  //   } 
  // }

  // function IsLogin() {
  //   if (!localStorage.token) {
  //     return <Navigate to={"/login"}/>
  //   } else {
  //     return <Outlet/>  
  //   }
  // }

  // function IsNotLogin() {
  //   if (localStorage.token) {
  //     return <Navigate to={"/"}/> 
  //   } else {
  //     return <Outlet/>
  //   }
  // }

  return (
    <>
    {isLoading ? null : (
    
    <>
      <Routes>
        {/* <Route path='/' element={<IsLogin/>}> */}
          <Route path='/' element={<Pages/>}>
            <Route index element={<Thread/>}/>
            <Route path=':id' element={<Detail/>}/>
            <Route path='follows' element={<Follow/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='profile/:id' element={<Profile/>}/>
            <Route path='profile/edit/:id' element={<ProfileEdit/>}/>
          {/* </Route> */}
        </Route>
          {/* <Route path='/' element={< IsNotLogin/>}> */}
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
          {/* </Route> */}
      </Routes>
    </>
    )} 
    </>
  )
}

export default App
