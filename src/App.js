import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log('aaa')
  // })
  // useEffect(() => {
  //   console.log('aaa')
  // },[])
  useEffect(() => {
    console.log('aaa')
  }, [count])
  return (
    <div className="App">
      <div> {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App
