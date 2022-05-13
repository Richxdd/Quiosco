import React, { ChangeEvent, useEffect, useCallback } from 'react'
import { formatMoney } from '../../helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks'
import Layout from '../../layout/Layout'
import { changeName, changeTotal } from '../../store/slices/quioscoslice'

const Total = () => {
  const { orders, name, total } = useAppSelector((state) => state.quiosco)
  const dispatch = useAppDispatch()
  const checkOrder = useCallback(() => {
    return orders.length === 0 || name === '' || name.length < 3
  }, [orders, name])

  const generateOrder = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    const total = orders.reduce(
      (total, product) => product.price * product.amount + total,
      0
    )
    checkOrder()
    dispatch(changeTotal(total))
  }, [orders, checkOrder])

  return (
    <Layout pagina='Total y Confirmar Pedido'>
      <h1 className='text-4xl font-black'>Total y Confirmar Pedido</h1>
      <p className='text-2xl my-10'>Confirma tu Pedido a Continuación</p>
      <form onSubmit={generateOrder}>
        <div>
          <label
            htmlFor='name'
            className='block uppercase text-slate-800 font-bold text-xl'
          >
            Nombre
          </label>
          <input
            value={name}
            onChange={(e) => dispatch(changeName(e.target.value))}
            id='name'
            type='text'
            className='bg-gray-200 w-full lg:w-1/3 p-2 rounded-md mt-3'
          />
        </div>
        <div className='mt-10'>
          <p className='text-2xl'>
            Total a pagar{' '}
            <span className='font-bold'>{formatMoney(total)}</span>
          </p>
        </div>
        <div className='mt-10'>
          <input
            value='Confirmar Pedido'
            type='button'
            disabled={checkOrder()}
            className={`${
              checkOrder()
                ? 'bg-indigo-100'
                : 'bg-indigo-600 hover:bg-indigo-800'
            }  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
          />
        </div>
      </form>
    </Layout>
  )
}

export default Total
