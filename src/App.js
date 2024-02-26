import { useState } from 'react'

function Son({ onGetSonMsg }) {
  const sonMsg = 'Son'
  return (
    <div>
      this is Son
      <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}
function App() {
  const [msg, setMsg] = useState('')
  const getMsg = msg => {
    console.log('msg: ', msg)
    setMsg(msg)
  }
  return (
    <div className="App">
      this is app
      <Son onGetSonMsg={getMsg}></Son>
      {msg}
    </div>
  )
}

export default App
