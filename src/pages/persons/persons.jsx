import React, { useEffect } from 'react'
import Layout from '../../components/admin-layout'
import SearchBar from '../../components/searchbar'
import GridMain from '../../components/grid-main'
import { useAppStore } from '../../zustand/AppStore'
import { Link, Outlet } from 'react-router-dom'


const Persons = () => {
    
    const setAllPersons = useAppStore((state) => state.setAllPersons)

    useEffect(() => {
        setAllPersons()

    }, [])
    return (

        <>
            <div className='container-fluid p-4'>
                <div className='row'>

                    <div className="d-flex justify-content-end">
                        <h1 className="font-semibold">Personas</h1>
                    </div>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Persons