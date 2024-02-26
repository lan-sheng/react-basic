function Son(props) {
  console.log('props: ', props)
  return (
    <div>
      this is son，{props.name}，{props.child}，{props.children}
    </div>
  )
}
function App() {
  const name = 'this is app name '
  return (
    <div className="App">
      <Son name={name} age={18} isTrue={false} list={['vue', 'react']} cb={() => console.log(1)} child={<span>123</span>} >
        <span>222</span>
      </Son>
    </div>
  )
}

export default App
