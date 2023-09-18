import React from 'react'
import Layout from '../components/admin-layout'
import SearchBar from '../components/searchbar'

const Ministries = () => {
  return (
      <div className='bg-secondary-100 p-8 rounded-xl'>
        <h1 className='text-xl text-gray-100'>Ministerios</h1>
        <hr className='my-8 border-gray-500'/>

        <form >
          <div className='flex items-center'>
            <div className='w-1/4'>
              <p>Nombre</p>
            </div>
            <div className='flex-1'>
              <input/>
            </div>
          </div>
        </form>
        <div className='row'>
          
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
  )
}

export default Ministries