// const handleClick = () => {
//   console.log('button被点击了')
// }
// 事件参数
// const handleClick = (e) => {
//   console.log('button被点击了',e)
// }
// 传递自定义参数
// const handleClick = name => {
//   console.log('button被点击了', name)
// }
// 既传递自定义参数又传递事件对象e
const handleClick = (name, e) => {
  console.log('button被点击了', name, e)
}
function App() {
  return (
    <div className="App">
      <button onClick={e => handleClick('aaa', e)}>click me</button>
    </div>
  )
}

export default App
