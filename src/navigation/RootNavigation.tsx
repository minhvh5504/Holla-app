import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoadingScreen from '@views/LoadingScreen'
import LoginScreen from '@views/LoginScreen'
import RegisterScreen from '@views/RegisterScreen'
import { useEffect, useState } from 'react'

const Stack = createNativeStackNavigator()

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  )
}

function Navigation() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 2000)
  }, [])

  return showLoading ? <LoadingScreen /> : <RootStack />
}

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}
