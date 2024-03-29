import './App.css'
import TreeView from './component'
import menus from './component/data'

function App() {
  

  return (
    <div className='contain'>
     <h2>Nested Tree View / Dynamic Menus in React JS</h2>
     <TreeView menus={menus}/>
    </div>
  )
}

export default App
