import { useEffect, useState } from 'react'

function Son() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器')
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div>this is Son</div>
}

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载son</button>
    </div>
  )
}

export default App
