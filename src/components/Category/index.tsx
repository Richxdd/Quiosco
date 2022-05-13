import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks'

import { Category } from '../../interfaces/category'
import { clickCategory } from '../../store/slices/categoryslice'

const Category = ({ id, name, icon }: Category) => {
  const dispatch = useAppDispatch()
  const { selectedCategory } = useAppSelector((state) => state.category)
  const router = useRouter()
  return (
    <div
      className={`${
        selectedCategory?.id === id ? 'bg-amber-400' : ''
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={100}
        height={100}
        src={`/assets/img/icono_${icon}.svg`}
        alt='Imagen Logo'
      />
      <button
        type='button'
        className='text-2xl font-bold hover:cursor-pointer'
        onClick={() => {
          dispatch(clickCategory(id))
          router.push(`/`)
        }}
      >
        {name}
      </button>
    </div>
  )
}

export default Category
