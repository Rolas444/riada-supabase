import React from 'react'
import Title from '../../components/title'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div className='bg-secondary-100 p-8 rounded-xl'>
      <Title name='Administración de Usuarios'/>
        <Outlet/>
    </div>
  )
}

export default Users