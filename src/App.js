const isLogin = true
// const isLogin = false
function App() {
  return (
    <div className="App">
      {/* && */}
      {isLogin && <span>this is span</span>}
      {/* 三元运算 */}
      {isLogin ? <span>jack</span> : <span>login...</span>}
    </div>
  )
}

export default App
