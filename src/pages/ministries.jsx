import React from 'react'
import Layout from '../components/admin-layout'
import SearchBar from '../components/searchbar'
import { Outlet } from 'react-router-dom'

const Ministries = () => {
  return (
      <div className='bg-secondary-100 p-8 rounded-xl'>
        <h1 className='text-xl text-gray-100'>Ministerios</h1>
        <hr className='my-8 border-gray-500'/>
        <Outlet>

        </Outlet>
      </div>
  )
}

export default Ministries