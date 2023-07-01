import React from 'react'
import Layout from '../components/Layout'

const Ministries = () => {
  return (
    <Layout>
      <div className='container-fluid'>
        <div className='row'>
          <div className="d-flex m-2">
            <h1 className='text-center'>Ministries</h1>
          </div>
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

export default Ministries