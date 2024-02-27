import { useDispatch, useSelector } from 'react-redux'
import { inscrement, decrement, addToNum } from './store/modules/counterStore'
function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>变10</button>
      <button onClick={() => dispatch(addToNum(20))}>变20</button>
    </div>
  )
}

export default App
