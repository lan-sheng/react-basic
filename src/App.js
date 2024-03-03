import { useDispatch, useSelector } from 'react-redux'
import { inscrement, decrement, addToNum } from './store/modules/counterStore'
import { fetchChannlList } from './store/modules/channelStore'
import { useEffect } from 'react'
function App() {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChannlList())
  }, [dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>变10</button>
      <button onClick={() => dispatch(addToNum(20))}>变20</button>
      <ul>
        {channelList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
