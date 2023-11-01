import React, { useEffect } from 'react'
import SearchBar from '../../components/searchbar'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../../zustand/AppStore';
import { shallow } from 'zustand/shallow';

const IndexMinistry = () => {
    const navigate = useNavigate();
    const navCreate = () => {
        navigate("create")
    }
    const ministries = useAppStore((state) => state.ministries, shallow)
    const getMinistries = useAppStore((state) => state.getMinistries)

    useEffect(() => {
     getMinistries();
    }, [])

    return (
        <>
            <div className='flex items-center'>

                <div className='w-full'>
                    <div className='flex justify-end col-span-1 mb-3 px-2'>
                        <button onClick={navCreate}
                            className='text-invert right-2.5 bottom-2.5 bg-soft hover:bg-soft focus:ring-4 focus:outline-none
                         focus:ring-soft font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-soft dark:focus:ring-primary'>
                            Crear
                        </button>
                    </div>
                    <SearchBar />
                    <div className='pt-5 relative overflow-x-auto shadow-md sm:rounded-lg md:rounded-md xl:rounded-lg'>
                        <div >
                            <table className='w-full text-sm text-left text-invert dark:text-invert'>
                                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                    <tr>
                                        <th scope="col" className='px-6 py-3'>name</th>
                                        <th scope="col" className='px-6 py-3'>Desc</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    
                                    {ministries ? (
                                        ministries.map((m) => (
                                            <>
                                                <tr key={m.id} className='bg-soft border-b dark:bg-primary dark:border-gray-700 hover:bg-soft dark:hover:bg-soft'>
                                                    <td className='px-6 py-4'>{m.name}</td>
                                                    <td className='px-6 py-4'>{m.desc}</td>
                                                    <td className="flex items-center px-6 py-4 space-x-3">
                                                        <a href="#" className="font-medium text-binvert dark:text-invert hover:underline">Edit</a>
                                                        <a href="#" className="font-medium text-invert dark:text-invert hover:underline">Remove</a>
                                                    </td>
                                                </tr>
                                            </>
                                        ))
                                        
                                    ) : (
                                        <span className='flex p-2 m-2'>No se encontraron ministerios</span>
                                    )}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexMinistry