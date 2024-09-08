import AppLoader from '@components/loading/AppLoader'
import { View, Text } from 'react-native'

const LoadingScreen = () => {
  return (
    <View className="flex-1 bg-[#238C98] items-center">
      <Text className=" mt-96 mb-80 color-white text-6xl font-black ">Holla</Text>
      <AppLoader />
    </View>
  )
}

export default LoadingScreen
