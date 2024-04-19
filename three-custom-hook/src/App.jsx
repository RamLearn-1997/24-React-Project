
import './App.css'
import UseFetchHookTest from './use-fetch/test'
import UseOnClickOutsideTest from './use-outside-click/test'
import UseWindowResizeTest from './use-window-resize/test'

function App() {
  

  return (
    <>
    {/* Use Fetch Hook */}
      <UseFetchHookTest/>
    {/* Use Outside Click  */}
      <UseOnClickOutsideTest/>
    {/* Use Window Resize Hook */}
      <UseWindowResizeTest/>
    </>
  )
}

export default App
