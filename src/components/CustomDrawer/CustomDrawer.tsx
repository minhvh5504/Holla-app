/* eslint-disable eqeqeq */
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Text, Switch, TouchableOpacity } from 'react-native'

const CustomDrawer = (props: any) => {
  const { navigation } = props

  const onLogout = () => {
    navigation.popToTop()
  }
  const onHelpAndSupport = () => {
    console.log('onHelpAndSupport')
  }
  const onRate = () => {
    console.log('onRate')
  }

  return (
    <View className="flex-1 bg-[#3D9FAA]">
      <View className="ml-6 w-60 h-60 border-b border-white">
        <Text className="mt-16 color-white text-5xl font-black ">Holla</Text>
        <View className="flex-row mt-10 items-center gap-5">
          <MaterialIcons name="account-circle" size={50} color="white" />
          <Text className="font-bold text-white text-xl">Vi Hong Minh</Text>
        </View>
      </View>
      <View className="flex-1">
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View className="flex-1 ml-6 w-60 border-t border-white">
          <View className="mt-5 flex-row items-center gap-5">
            <MaterialIcons name="info" size={30} color="white" />
            <TouchableOpacity onPress={onHelpAndSupport}>
              <Text className="text-white font-medium ">Help and Support</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-5 flex-row items-center gap-5">
            <MaterialIcons name="grade" size={30} color="white" />
            <TouchableOpacity onPress={onRate}>
              <Text className="text-white font-medium">Rate us</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-28 ml-10 flex-row items-center gap-5">
            <Text className="text-white text-xl font-bold">Light Mode</Text>
            <Switch value trackColor={{ false: '#767577', true: 'white' }} thumbColor="#238C98" />
          </View>
          <TouchableOpacity onPress={onLogout}>
            <Text className="mt-14 ml-20 text-white text-2xl font-bold">Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CustomDrawer
