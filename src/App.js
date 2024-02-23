const articleType = 2 // 0 1 2

function getArticleTem() {
  if (articleType === 0) {
    return <div>我是无图模式</div>
  } else if (articleType === 1) {
    return <div>我是单图模式</div>
  } else {
    return <div>我是二图模式</div>
  }
}

function App() {
  return <div className="App">{getArticleTem()}</div>
}

export default App
