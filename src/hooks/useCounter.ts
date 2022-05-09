import { useState } from 'react'

export const useCounter = (initialState: number = 10) => {
  const [counter, setCounter] = useState<number>(initialState)
  const reset = () => {
    setCounter(initialState)
  }
  const increment = () => {
    if (counter >= 5) return
    setCounter(counter + 1)
  }
  const decrement = () => {
    if (counter <= 0) return
    setCounter(counter - 1)
  }
  const addCounter = (value: number) => {
    setCounter(value)
  }
  return { counter, increment, decrement, addCounter, reset }
}
