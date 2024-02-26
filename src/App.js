import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default App
