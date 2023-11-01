import React from 'react'

const Title = ({ name = '' }) => {
    return (
        <>
            <h1 className='text-xl text-gray-100'>{name}</h1>
            <hr className='my-8 border-gray-500' />
        </>
    )
}

export default Title