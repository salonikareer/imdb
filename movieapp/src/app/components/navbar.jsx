import React from 'react'
import Navbaritem from './navbaritem'

const Navbar = () => {
  return (
    <div className='flex dark:bg-amber-300 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
        <Navbaritem title="Trending" param="fetchTrending"/>
        <Navbaritem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar