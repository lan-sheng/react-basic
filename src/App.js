import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    // count++
    console.log('count: ', count)
  }

  const [form, setForm] = useState({ name: 'aaa' })

  const changeForm = () => {
    // form.name='bbb'
    setForm({ ...form, name: 'bbb' })
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form{form.name}</button>
    </div>
  )
}

export default App
