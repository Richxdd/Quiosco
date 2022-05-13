import Head from 'next/head'
import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Steps from '../components/Steps'
import Modal from '../components/Modal'
import ModalPoduct from '../components/ModalPoduct'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/reduxhooks'
import 'react-toastify/dist/ReactToastify.css'
import { clickCategory, getCategory } from '../store/slices/categoryslice'

interface Props {
  children?: React.ReactNode
  pagina?: string
}

const Layout = ({ children, pagina }: Props) => {
  const { modal } = useAppSelector((state) => state.quiosco)
  const dispatch = useAppDispatch()
  const { category } = useAppSelector((state) => state.category)

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

  useEffect(() => {
    dispatch(clickCategory(category[0]?.id))
  }, [category])

  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name='description' content='Quiosco Caféteria' />
      </Head>

      <div className='md:flex'>
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
          <Sidebar />
        </aside>
        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
          <div className='p-10'>
            <Steps />
            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal}>
          <ModalPoduct />
        </Modal>
      )}
      <ToastContainer />
    </>
  )
}

export default Layout
