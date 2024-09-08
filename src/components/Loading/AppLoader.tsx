import LottieView from 'lottie-react-native'

const AppLoader = () => {
  return (
    <LottieView
      source={require('@assets/loading.json')}
      style={{ width: '50%', height: '30%' }}
      autoPlay
      loop
    />
  )
}

export default AppLoader
