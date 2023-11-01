
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/client'
import { useEffect, useState } from 'react'
import { useAppStore } from './zustand/AppStore'
import Settings from './pages/Settings'
import Ministries from './pages/ministries/ministries'
import Persons from './pages/persons'
import AdminLayout from './components/admin-layout'
import CreateMinistry from './pages/ministries/CreateMinistry'
import IndexMinistry from './pages/ministries/IndexMinistry'
import IndexUser from './pages/users/index-users'
import CreateUser from './pages/users/create-user'
import Users from './pages/users/users'
import {ImSpinner9} from 'react-icons/im'

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const setCurrentUser = useAppStore((state) => state.setCurrentUser);

  useEffect(() => {
    setLoading(true);
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        setCurrentUser(null);
        navigate("/login")
      } else {
        setCurrentUser(session.user)
        setLoading(false);
      }

    });
  }, [])

  return (
    <>
      {
        loading ?
          (
            <>
              <div className='w-full h-screen flex justify-center items-center'>
                  <ImSpinner9 className="animate-spin w-8 h-8" />
              </div>
            </>
          ) : (
            <>
              <Routes>
                <Route path='/login' element={<Login />} />

                <Route path='/' element={<AdminLayout />}>
                  <Route index element={<Home />} />
                  <Route path='settings' element={<Settings />} />
                  <Route path='admin/users' element={<Users />}>
                    <Route index element={<IndexUser />} />
                    <Route path='create' element={<CreateUser />} />
                  </Route>
                  <Route path='ministries' element={<Ministries />} >
                    <Route index element={<IndexMinistry />} />
                    <Route path='create' element={<CreateMinistry />} />
                  </Route>

                  <Route path='persons' element={<Persons />} />
                </Route>
                <Route path='*' element={<NotFound />} />
              </Routes >
            </>
          )
      }
    </>
  )
}

export default App
