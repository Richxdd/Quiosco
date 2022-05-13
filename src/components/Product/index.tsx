import Image from 'next/image'
import React from 'react'
import { formatMoney } from '../../helpers'
import { useAppDispatch } from '../../hooks/reduxhooks'
import { Product } from '../../interfaces/category'
import { clickModal, fillProduct } from '../../store/slices/quioscoslice'

const Product = ({ name, image, price, id, categoryId }: Product) => {
  const dispatch = useAppDispatch()
  const agregar = () => {
    dispatch(fillProduct({ name, image, price, id, categoryId }))
    dispatch(clickModal())
  }

  return (
    <div className='border p-3'>
      <Image
        src={`/assets/img/${image}.jpg`}
        alt={`Imagen Platillo ${name}`}
        width={400}
        height={500}
      />
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          {formatMoney(price)}
        </p>
        <button
          type='button'
          className='bg-indigo-600 mt-5 hover:bg-indigo-800 text-white w-full mt5 p-3 uppercase font-bold rounded'
          onClick={agregar}
        >
          AGREGAR
        </button>
      </div>
    </div>
  )
}

export default Product
