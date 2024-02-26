import { useState } from 'react'

function useToggle() {
  const [value, setValue] = useState(true)
  const toggle = () => setValue(!value)
  return { value, toggle }
}

function App() {
  const { value, toggle } = useToggle()
  return (
    <div className="App">
      <button onClick={toggle}>toggle</button>
      {value && <div>this is div</div>}
    </div>
  )
}

export default App
