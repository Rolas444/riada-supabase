import React from 'react'
import Layout from '../components/Layout'
import SearchBar from '../components/searchbar'

const Persons = () => {
    return (
        <Layout>
            <div className='container-fluid p-4'>
                <div className='row'>
                    
                    <div className="d-flex justify-content-end">
                        <h1 className="">Personas</h1>
                    </div>
                    <SearchBar/>
                    <div className=''>
                        <div className='table-responsive'>
                            <table className='table table-sm table-borderless table-hover'>
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>Desc</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Persons