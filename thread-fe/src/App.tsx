// import { ThreadDetail } from './features/thread'
import { Pages } from './pages'
import { Home } from './pages/home'
import { Routes, Route, useNavigate} from "react-router-dom";
import { Detail } from './pages/home/Detail';
import { Login, Register } from './features/auth';
import { useEffect, useState } from 'react';
import { API, setAuthToken } from './libs/api';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate()

  async function authCheck() {
    try {
      setAuthToken(localStorage.token)
      const response = await API.get('/auth/check')
      console.log("auth check berhasil", response)
      setIsLoading(false)
    } catch (err) {
      localStorage.removeItem("token")
      setIsLoading(false)
      navigate('/login')
      console.log("auth error:", err)
    }
  }

  useEffect(()=> {
    if(localStorage.token) {
      authCheck()
    } else {
      setIsLoading(false)
      navigate('/login')
    }
  }, [])

  return (
    <>
    {isLoading ? null : 
    
    <>
      <Routes>
        <Route path='/' element={<Pages/>}>
          <Route index element={<Home/>}/>
          <Route path=':id' element={<Detail/>}/>
        </Route>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
     } 
    </>
  )
}

export default App
