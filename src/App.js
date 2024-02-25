import './index.css';
const style = {
  color: 'red',
  fontSize: '50px',
}
function App() {
  return (
    <div className="App">
      {/* <span style={{ color: 'red',fontSize:'30px ' }}>aaa</span> */}
      <span style={style}>aaa</span>
      <span className="bbb">bbb</span>
    </div>
  )
}

export default App
