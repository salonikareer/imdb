import React from 'react'
import Menuitem from './menuitem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import Darkmodeswitch from './darkmodeswitch'
const Header = () => {
  return (
    <div className='flex justify-between p-3 items-center max-w-6xl mx-auto'>
        <div className='flex gap-4 '>
         <Menuitem title="Home" address="/" Icon={AiFillHome} /> 
        <Menuitem title="About" address="/about" Icon={BsFillInfoCircleFill} /></div>
        <div className='flex items-center gap-3'>
            <Darkmodeswitch/>
        <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-3xl font-bold bg-amber-500 py-1 px-2 rounded-lg '>IMdb</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
        </div>
    </div>
  )
}

export default Header