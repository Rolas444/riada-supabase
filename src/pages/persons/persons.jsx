import React, { useEffect } from 'react'
import Layout from '../../components/admin-layout'
import SearchBar from '../../components/searchbar'
import GridMain from '../../components/grid-main'
import { useAppStore } from '../../zustand/AppStore'
import columnPersons from '../../components/aux/columnPersons'

const Persons = () => {
    const persons = useAppStore((state)=>state.persons)
    const setAllPersons= useAppStore((state)=>state.setAllPersons)

    useEffect(()=>{
        setAllPersons()
        
    },[])
    return (
            <div className='container-fluid p-4'>
                <div className='row'>
                    
                    <div className="d-flex justify-content-end">
                        <h1 className="">Personas</h1>
                    </div>
                    <SearchBar/>
                    <div className=''>
                        <div className='table-responsive'>
                            <GridMain data={persons} columns={columnPersons}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Persons