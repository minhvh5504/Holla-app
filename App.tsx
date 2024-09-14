import RootComponent from 'navigation/RootNavigation'
import './global.css'
import './gesture-handler.native'
import { LogBox } from 'react-native'

const App = () => {
  LogBox.ignoreLogs(['[Reanimated] Reduced motion setting is enabled on this device.'])
  return <RootComponent />
}

export default App
