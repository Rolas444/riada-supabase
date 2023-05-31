import { useState } from 'react'
import './App.css'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/client'
import { useEffect } from 'react'
import { useAppStore } from './zustand/AppStore'

function App() {
  const navigate = useNavigate();
  const setCurrentUser = useAppStore((state)=>state.setCurrentUser);
  
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(!session){
        setCurrentUser(null);
        navigate("/login")
      }else{
        setCurrentUser(session.user)
      }

    });
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
