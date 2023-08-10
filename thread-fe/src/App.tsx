import { ThreadDetail } from './features/thread'
import { Pages } from './pages'
import { Home } from './pages/home'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Detail } from './pages/home/Detail';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages/>}>
          <Route index element={<Home/>}/>
          <Route path=':id' element={<Detail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
