const list = [
  { id: 1001, name: 'vue1' },
  { id: 1002, name: 'vue2' },
  { id: 1003, name: 'vue3' },
]
function App() {
  return (
    <div className="App">
      this is app
      <ul>
        {list.map(item => <li key={item.id}>{ item.name}</li>)}
     </ul>
    </div>
  )
}

export default App
