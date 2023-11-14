import React, { useEffect, useState } from 'react'

const DebouncedInput = ({eValue,onChange, debounce=500,...props }) => {
    const [value,setValue]=useState(eValue)

    useEffect(()=>{
        onChange(value)
    },[value])
  return (
    <input {...props} value={value} onChange={e=>setValue(e.target.value)} />
  )
}

export default DebouncedInput