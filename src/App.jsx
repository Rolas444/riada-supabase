
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/client'
import { useEffect } from 'react'
import { useAppStore } from './zustand/AppStore'
import Settings from './pages/Settings'
import Ministries from './pages/ministries'
import Persons from './pages/persons'
import AdminLayout from './components/admin-layout'

function App() {
  const navigate = useNavigate();
  const setCurrentUser = useAppStore((state) => state.setCurrentUser);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        setCurrentUser(null);
        navigate("/login")
      } else {
        setCurrentUser(session.user)
      }

    });
  }, [])

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        
        <Route path='/' element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path='settings' element={<Settings />} />
          <Route path='ministries' element={<Ministries />} />
          <Route path='persons' element={<Persons />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
