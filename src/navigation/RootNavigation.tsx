import LoginScreen from '@views/LoginScreen'
import React, { useEffect, useState } from 'react'
import LoadingScreen from 'views/LoadingScreen'
// import RegisterScreen from '@views/RegisterScreen'

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
