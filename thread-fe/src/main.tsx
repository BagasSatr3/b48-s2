import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { SideNav } from './pages/SideNav.tsx';
import { DetailTweet } from './pages/Detail.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SideNav/>}>
      <Route index element={<App/>} />
      <Route path='detail/:id' element={<DetailTweet/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //     <BrowserRouter>
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
  //     </BrowserRouter>
  // </React.StrictMode>,
)
