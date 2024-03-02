import { ChangeEvent, useState } from 'react'
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from '../../features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../hook'

const Counter = () => {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const [amount, setAmount] = useState(2)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input type="number" name="num" id="num" onChange={handleInput} value={amount} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>add</button>
      <button onClick={() => dispatch(incrementAsync(amount))}>async add</button>
    </div>
  )
}

export default Counter
