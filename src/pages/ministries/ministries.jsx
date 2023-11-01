import React from 'react'
import Layout from '../../components/admin-layout'
import SearchBar from '../../components/searchbar'
import { Outlet } from 'react-router-dom'
import Title from '../../components/title'

const Ministries = () => {
  return (
      <div className='bg-secondary-100 p-8 rounded-xl'>
        <Title name='Ministerios'/>
        <Outlet>

        </Outlet>
      </div>
  )
}

export default Ministries