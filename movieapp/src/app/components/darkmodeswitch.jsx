"use client";
import React, { useEffect } from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import {useTheme} from 'next-themes'
const Darkmodeswitch = () => {
    const {theme, setTheme, systemTheme} = useTheme()
   const [mounted, setMounted] = React.useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme
    useEffect(()=>setMounted(true), []);
  return (
    <div>
        {mounted &&
            (currentTheme === 'dark' ? (
                <MdLightMode
                onClick={() => setTheme('light')}
                className='text-3xl cursor-pointer hover:text-amber-500'
                />
            ) : (
                <MdDarkMode
                onClick={() => setTheme('dark')}
                className='text-3xl cursor-pointer hover:text-amber-500'
                />
            )
        )}
    </div>
  )
}

export default Darkmodeswitch