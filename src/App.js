import { createContext, useContext, useState } from 'react'

const MsgContext = createContext()

function A() {
  return (
    <div>
      this is aaa
      <B />
    </div>
  )
}
function B() {
  const msg = useContext(MsgContext)
  return <div>this is bbb，{msg}</div>
}
function App() {
  const msg = 'this is appMsg'
  return (
    <div className="App">
      <MsgContext.Provider value={msg}>
        this is app
        <A />
      </MsgContext.Provider>
    </div>
  )
}

export default App
