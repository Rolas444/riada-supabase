import React from 'react'
import SearchBar from '../../components/searchbar'
import { useNavigate } from 'react-router-dom'

const IndexUser = () => {
    const navigate = useNavigate();
    const createUser = () =>{
        navigate('/admin/users/create')
    }
    return (
        <div className='flex items-center'>
            <div className='w-full'>
                <div className='flex justify-end col-span-1 mb-3 px-2'>
                    <button onClick={createUser}
                        className='text-invert right-2.5 bottom-2.5 bg-soft hover:bg-soft focus:ring-4 focus:outline-none
                         focus:ring-soft font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-soft dark:focus:ring-primary'>
                        Crear
                    </button>
                </div>
                <SearchBar />
            </div>
        </div>
    )
}

export default IndexUser