
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/client'
import { useEffect, useState } from 'react'
import { useAppStore } from './zustand/AppStore'
import Ministries from './pages/ministries/ministries'
import Persons from './pages/persons/persons'
import AdminLayout from './components/admin-layout'
import CreateMinistry from './pages/ministries/CreateMinistry'
import IndexMinistry from './pages/ministries/IndexMinistry'
import IndexUser from './pages/users/index-users'
import CreateUser from './pages/users/create-user'
import Users from './pages/users/users'
import CreatePerson from './pages/persons/createPerson'
import IndexPersons from './pages/persons/index-persons'


function App() {

  return (
    <>

      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<AdminLayout  />}>
          <Route index element={<Home />} />
          <Route path='admin/users' element={<Users />}>
            <Route index element={<IndexUser />} />
            <Route path='create' element={<CreateUser />} />
          </Route>
          <Route path='ministries' element={<Ministries />} >
            <Route index element={<IndexMinistry />} />
            <Route path='create' element={<CreateMinistry />} />
          </Route>

          <Route path='persons' element={<Persons />} >
            <Route index element={<IndexPersons />}/>
            <Route path='create' element={<CreatePerson />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes >
    </>

  )
}

export default App
