import { Flex, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import Modal from '../components/Modal'
import ModalPoduct from '../components/ModalPoduct'
import Sidebar from '../components/Sidebar'
import { useAppSelector } from '../hooks/reduxhooks'
import 'react-toastify/dist/ReactToastify.css'
interface Props {
  children?: React.ReactNode
  pagina?: string
}

const Layout = ({ children, pagina }: Props) => {
  const { modal } = useAppSelector((state) => state.modal)
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name='description' content='Quiosco Caféteria' />
      </Head>

      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
          <Sidebar />
        </aside>
        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
          <div className='p-10'> {children}</div>
        </main>
      </Flex>
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
