import { useState } from 'react'

function A({ onGetAName }) {
  const name = 'aaa'
  return (
    <div>
      this is aaa
      <button onClick={() => onGetAName(name)}>发送</button>
    </div>
  )
}
function B({ name }) {
  return <div>this is bbb，{name}</div>
}
function App() {
  const [name, setName] = useState('')
  const getAName = name => {
    console.log('name: ', name)
    setName(name)
  }
  return (
    <div className="App">
      this is app
      <A onGetAName={getAName} />
      <B name={name} />
    </div>
  )
}

export default App
