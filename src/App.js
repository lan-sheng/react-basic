const count = 100

function geName() {
  return 'jack'
}

function App() {
  return (
    <div className="App">
      this is app
      {/* 使用引号传递字符串 */}
      {'this is message'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {geName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: 'red' }}>this is dav</div>
    </div>
  )
}

export default App
