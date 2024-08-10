"use client"
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
const Searchbox = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
       router.push(`/search/${search}`)

    };
  return (
    <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
        <input type="text"
         placeholder='search keywords...'
          className='w-full h-14 rounded-md placeholder-gray-500 outline-none hover:border-b-2 border-gray-300  bg-transparent flex-1'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <button className='text-amber-600 disabled:text-gray-400' disabled={search===''}>Search</button>

    </form>
  )
}

export default Searchbox;