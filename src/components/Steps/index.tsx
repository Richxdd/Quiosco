import { useRouter } from 'next/router'
import React from 'react'

const steps = [
  { step: 1, name: 'Menu', url: '/' },
  { step: 2, name: 'Resumen', url: '/resume' },
  { step: 3, name: 'Datos y Total', url: '/total' }
]

const Steps = () => {
  const router = useRouter()

  const calculateProgress = () => {
    let valor
    if (router.pathname === '/') {
      valor = 2
    } else if (router.pathname === '/resume') {
      valor = 50
    } else {
      valor = 100
    }
    return valor
  }

  return (
    <>
      <div className='flex justify-between mb-5'>
        {steps.map((item) => (
          <button
            onClick={() => {
              router.push(item.url)
            }}
            className='text-2xl font-bold'
            key={item.step}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className='bg-gray-100 mb-10'>
        <div
          className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center w-10'
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  )
}

export default Steps
