import { decrement, increment } from '../../features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../hook'

const Counter = () => {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
