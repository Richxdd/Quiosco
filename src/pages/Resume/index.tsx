import React from 'react'
import ResumeProduct from '../../components/ResumeProduct'
import { useAppSelector } from '../../hooks/reduxhooks'
import Layout from '../../layout/Layout'

const Resume = () => {
  const { orders } = useAppSelector((state) => state.quiosco)
  return (
    <Layout pagina='Resumen'>
      <h1 className='text-4xl font-black'>Resumen</h1>
      <p className='text-2xl my-10'>Revisa tu Pedido</p>
      {orders.length === 0 ? (
        <p className='text-center text-2xl'>No hay elemntos en tu pedido</p>
      ) : (
        orders.map((item) => <ResumeProduct key={item.id} {...item} />)
      )}
    </Layout>
  )
}

export default Resume
