// import LoginScreen from '@views/LoginScreen'
import LoginScreen from '@views/LoginScreen'
import { useEffect, useState } from 'react'
import LoadingScreen from 'views/LoadingScreen'

const RootNavigation = () => {
  const [checkShowLoading, setShowLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 2000)
  })
  return checkShowLoading ? <LoadingScreen /> : <LoginScreen />
}

export default RootNavigation
