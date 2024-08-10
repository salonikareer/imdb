import Link from 'next/link'
import React from 'react'

const Menuitem = ({title, address, Icon}) => {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
      <Icon className="text-2xl lg:text-4xl "/>
      <p className="uppercase hidden sm:inline  text-sm">{title}</p>
    </Link>
  )
}

export default Menuitem