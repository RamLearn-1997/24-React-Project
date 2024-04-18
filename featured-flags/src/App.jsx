
import './App.css'
import FeatureFlags from './component'
import FeatureFlagsGlobalState from './component/context'


function App() {
  

  return (
    <>
      <FeatureFlagsGlobalState>
        <FeatureFlags/>
      </FeatureFlagsGlobalState>
    </>
  )
}

export default App
