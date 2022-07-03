import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PasswordReset from './pages/auth/PasswordReset'
import PasswordResetConfirm from './pages/auth/PasswordResetConfirm'
import EmailVefiryRequest from "./pages/auth/EmailVefiryRequest";
import EmailVerify from "./pages/auth/EmailVerify";
import Navbar from "./components/Navbar";
import Feed from './pages/Feed'
import FeedLayout from "./layouts/FeedLayout";
import MessagesLayout from './layouts/MessagesLayout'
import {useEffect} from 'react'
import { retrieveRefresh } from "./utils";
import {useTokenRefresh} from './adapters/auth'
import Users from './pages/feed/Users'
import Chat from './pages/feed/Chat'
import Lessons from './pages/feed/Lessons'
import Dashboard from './pages/feed/Dashboard'
import { useSelector } from "react-redux";
import {useGetMessages} from './adapters/chat'

const App =()=>{
  const refresh = retrieveRefresh()
  const is_authenticated = useSelector(state=>state.user.is_authenticated)
  const token_refesh = useTokenRefresh()

  useEffect(()=>{
    if(refresh && ( is_authenticated === null || is_authenticated===false ) ){
      token_refesh(refresh)
    }
  },[])


  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MessagesLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='password-reset' element={<PasswordReset/>}/>
            <Route path='password-reset-confirm/:uidb64/:token/' element={<PasswordResetConfirm/>}/>
            <Route path='email-verify-request' element={<EmailVefiryRequest/>}/>
            <Route path='email-verify/:uidb64/token/' element={<EmailVerify/>}/>
            <Route path='feed' element={<FeedLayout/>}>
                <Route index element={<Feed/>}/>
                <Route path='lessons' element={<Lessons/>}/>
                <Route path='chat' element={<Chat/>}/>
                <Route path='users' element={<Users/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
            </Route>
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
