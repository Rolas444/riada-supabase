import React from 'react'
import { Link } from 'react-router-dom'
import { IoPersonAdd } from 'react-icons/io5'
import GridMain from '../../components/grid-main'
import ColumnPersons from '../../components/aux/columnPersons'
import { useAppStore } from '../../zustand/AppStore'

const IndexPersons = () => {
  const persons = useAppStore((state) => state.persons)

  return (
    <>
      <div className='flex justify-end'>
        <Link to={'create'} className='flex hover:text-blue-200 text-blue-400 rounded-md p-2 hover:bg-gray-800 '>
          <span className='text-md px-3'>
            Agregar
          </span>
          <IoPersonAdd className='w-6 h-6 ' />
        </Link>
      </div>
      <div className='w-full'>
        <div className='table-responsive'>
          <GridMain data={persons} columns={ColumnPersons} />
        </div>
      </div>
    </>
  )
}

export default IndexPersons