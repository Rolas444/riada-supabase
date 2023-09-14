import React from 'react'

const SearchBar = () => {
    return (
        <>
            <div className='input-group mb-3'>
                <input type='text' className='form-control'>
                </input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Buscar</button>
                </div>
            </div>
        </>
    )
}

export default SearchBar