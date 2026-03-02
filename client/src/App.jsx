import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
import { useAuthStore } from './store/useAuthStore'
import {Loader} from "lucide-react"
import { Toaster } from "react-hot-toast";
const App = () => {

  const {checkAuth,authUser,isCheckingAuth}=useAuthStore();

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  console.log({authUser})
  if(isCheckingAuth && !authUser){
    return(
      <div>
        <Loader clasname='size-10 animate-spin'/>
      </div>
    )
  }
  return (

   <>
    <Navbar/>

    <Routes>
      <Route  path='/' element={ authUser? <HomePage/>:<Navigate to='/login'/>}/>
      <Route  path='/signup'  element={ !authUser? <SignupPage/>:<Navigate to='/'/>}/>
      <Route  path='/login'  element={ !authUser? <LoginPage/>:<Navigate to='/'/>}/>
      <Route  path='/settings' element={<SettingsPage/>}/>
      <Route  path='/profile'  element={ authUser? <ProfilePage/>:<Navigate to='/login'/>}/>
    </Routes>
    <Toaster/>
   </>
  )
}

export default App