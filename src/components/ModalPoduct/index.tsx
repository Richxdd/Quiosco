import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { formatMoney } from '../../helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks'
import { useCounter } from '../../hooks/useCounter'
import { clickModal } from '../../store/slices/modalslice'
import { addOrder } from '../../store/slices/orderslice'

const ModalPoduct = () => {
  const dispatch = useAppDispatch()
  const { product } = useAppSelector((state) => state.modal)
  const { orders } = useAppSelector((state) => state.orders)
  const { counter, increment, decrement, addCounter } = useCounter(1)
  const [amountEdit, setAmountEdit] = useState(false)

  useEffect(() => {
    if (orders.some((item) => item.id === product.id)) {
      const productEdit = orders.find((item) => item.id === product.id)
      setAmountEdit(true)
      addCounter(productEdit?.amount ? productEdit.amount : 1)
    }
  }, [product, orders])

  return (
    <div className='md:flex gap-10 p-3 w-[700]'>
      <div className='md:w-1/3'>
        <Image
          width={300}
          height={400}
          alt={`image product ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>
      <div className='md:w-2/3'>
        <div className='flex justify-end'>
          <button onClick={() => dispatch(clickModal())}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <h1 className='text-3xl font-bold mt-5'>{product.name}</h1>
        <p className='mt-5 font-black text-5xl text-amber-500'>
          {formatMoney(product.price)}
        </p>
        <div className='flex gap-4 mt-5'>
          <button onClick={decrement}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
          <p className='text-3xl'> {counter}</p>
          <button onClick={increment}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded'
          onClick={() => {
            dispatch(addOrder({ ...product, amount: counter }))
            dispatch(clickModal())
          }}
        >
          {amountEdit ? 'Guardar Cambios' : 'Añadir al Pedido'}
        </button>
      </div>
    </div>
  )
}

export default ModalPoduct
