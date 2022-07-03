import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Chat from './pages/Chat'
import PasswordReset from './pages/auth/PasswordReset'
import PasswordResetConfirm from './pages/auth/PasswordResetConfirm'
import EmailVefiryRequest from "./pages/auth/EmailVefiryRequest";
import EmailVerify from "./pages/auth/EmailVerify";
import Navbar from "./components/Navbar";
import Feed from './pages/Feed'

const App =()=>{
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/password-reset' element={<PasswordReset/>}/>
        <Route path='/password-reset-confirm/:uidb64/:token/' element={<PasswordResetConfirm/>}/>
        <Route path='/email-verify-request' element={<EmailVefiryRequest/>}/>
        <Route path='/email-verify/:uidb64/token/' element={<EmailVerify/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
