import React from 'react'
interface Props {
  children?: React.ReactNode
  isOpen?: boolean
}

const Modal = ({ children, isOpen = false }: Props) => {
  return (
    <div
      className={
        isOpen
          ? 'h-screen w-screen top-0 flex justify-center items-center fixed bg-[rgba(255,255,255,0.5)]'
          : 'hidden'
      }
    >
      <div className='bg-white border rounded'>{children}</div>
    </div>
  )
}
export default Modal
