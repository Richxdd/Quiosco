import Image from 'next/image'
import React from 'react'
import { useAppSelector } from '../../hooks/reduxhooks'

import Category from '../Category'

const Sidebar = () => {
  const { category } = useAppSelector((state) => state.category)
  return (
    <>
      <Image width={300} height={100} src='/assets/img/logo.svg' alt='logo' />
      <nav className='mt-10'>
        {category.map((item) => (
          <Category key={item.id} {...item} />
        ))}
      </nav>
    </>
  )
}

export default Sidebar
