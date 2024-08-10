"use client"
import React,{useEffect} from 'react'

const Error = ({ error, reset }) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong!.please try again</h1>
        <button className='hover:text-amber-600' onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error