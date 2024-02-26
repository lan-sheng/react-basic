import { useRef } from 'react'

function App() {
  const inputRef = useRef(null)
  const showDom = () => {
    console.log(inputRef.current)
  }
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>获取dom</button>
    </div>
  )
}

export default App
