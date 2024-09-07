import React from 'react'
import { View, Text, Image } from 'react-native'

const LoadingScreen = () => {
  return (
    <View className="flex-1 bg-[#238C98] justify-center items-center">
      <Text className="mt-96 color-white text-6xl font-black">Holla</Text>
      <Image className="mt-96" source={require('@assets/image/loading/loading.png')} />
    </View>
  )
}

export default LoadingScreen
