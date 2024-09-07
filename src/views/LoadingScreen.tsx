import LoadingSvg from '@assets/svg/loading.svg'
import React from 'react'
import { View, Text } from 'react-native'

const LoadingScreen = () => {
  return (
    <View className="flex-1 bg-[#238C98] justify-center items-center">
      <Text className="mt-96 color-white text-6xl font-black">Holla</Text>
      <View className="mt-96">
        <LoadingSvg />
      </View>
    </View>
  )
}

export default LoadingScreen
