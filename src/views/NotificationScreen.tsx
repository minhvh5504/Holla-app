import BackUpIcon from '@components/BackUp/BackUpIcon'
import MaterialComnunnityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NotificationScreen = ({ navigation }: any) => {
  const onBackUp = () => {
    navigation.goBack()
  }
  return (
    <ScrollView className="bg-[#F4F4F4]">
      <View className="flex-row items-center gap-6">
        <TouchableOpacity onPress={onBackUp}>
          <BackUpIcon />
        </TouchableOpacity>
        <Text className="mt-20 text-2xl font-bold">Notification</Text>
      </View>
      <View className="mt-5 p-3">
        <View>
          <Text className="ml-3 text-xl font-bold">Today</Text>
          <View className="flex-row gap-6 bg-[#E4E4E4] h-36 p-5 rounded-2xl">
            <View className=" bg-[#0FA958] rounded-full w-14 h-14 justify-center items-center opacity-85">
              <MaterialIcons name="check-box" color="white" size={30} />
            </View>
            <View className=" gap-3">
              <Text className="font-semibold text-lg opacity-75">Payment Successful</Text>
              <Text className="font-medium text-base opacity-60">
                Estabeer Hotel booking was successful
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-3 p-3">
        <View>
          <Text className="ml-3 text-xl font-bold">Yesterday</Text>
          <View className="flex-row gap-6 bg-[#E4E4E4] h-36 p-5 rounded-2xl">
            <View className=" bg-[#EA523D] rounded-full w-14 h-14 justify-center items-center opacity-85">
              <MaterialComnunnityIcons name="close-box" color="white" size={30} />
            </View>
            <View className=" gap-3">
              <Text className="font-semibold text-lg opacity-75">Hotel Booking Canceled</Text>
              <Text className="font-medium text-base opacity-60">
                You have canceled Ehiz hotel booking
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-3 p-3">
        <View>
          <Text className="ml-3 text-xl font-bold">Yesterday</Text>
          <View className="flex-row gap-6 bg-[#E4E4E4] h-36 p-5 rounded-2xl">
            <View className=" bg-[#238C98] rounded-full w-14 h-14 justify-center items-center opacity-85">
              <MaterialComnunnityIcons
                name="checkbox-marked-circle-outline"
                color="white"
                size={30}
              />
            </View>
            <View className=" gap-3">
              <Text className="font-semibold text-lg opacity-75">Password succesfully changed</Text>
              <Text className="font-medium text-base opacity-60">
                You changed to a new password
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-3 p-3">
        <View>
          <Text className="ml-3 text-xl font-bold">Jan 24, 2023</Text>
          <View className="flex-row gap-6 bg-[#E4E4E4] h-36 p-5 rounded-2xl">
            <View className=" bg-[#1588FB] rounded-full w-14 h-14 justify-center items-center opacity-75">
              <MaterialComnunnityIcons name="checkbox-marked-outline" color="white" size={30} />
            </View>
            <View className=" gap-3">
              <Text className="font-semibold text-lg opacity-75">Account Refunded</Text>
              <Text className="font-medium text-base opacity-60 w-80">
                Your account has been credited back with 80% refund fee
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default NotificationScreen
