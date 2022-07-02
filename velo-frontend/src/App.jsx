import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App =()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
