import HomeAbuja from '@assets/svg/homeabuja.svg'
import HomeBooking from '@assets/svg/homebooking.svg'
import HomeEstabeer from '@assets/svg/homeestabeez.svg'
import HomeFinese from '@assets/svg/homefinese.svg'
import HomeLagos from '@assets/svg/homelagos.svg'
import HomeOyo from '@assets/svg/homeoyo.svg'
import HomeThePheels from '@assets/svg/homethepheels.svg'
import Location from '@assets/svg/location.svg'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const onMenuPress = () => {
    navigation.openDrawer()
  }

  const onSearchPress = () => {
    console.log('onSearchPress')
  }

  const onListSearchPress = () => {
    console.log('onListSearchPress')
  }

  const onSeeAllHotels = () => {
    console.log('onSeeAllHotelsPress')
  }

  const onSeeAllDetailsDiscount = () => {
    console.log('onSeeAllDetailsDiscount')
  }
  return (
    <View className="bg-[#F4F4F4]">
      <ScrollView>
        <View className="mt-14 gap-5 p-5">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={onMenuPress}>
              <MaterialIcons name="menu" size={30} />
            </TouchableOpacity>
            <View className="flex-col">
              <Text className="text-neutral-400 font-light">Current Location</Text>
              <View className="flex-row">
                <Location />
                <Text className="ml-3 font-normal">Ajah,Lagos</Text>
              </View>
            </View>
          </View>
          <View className="p-3 h-45 bg-white border  border-[#B8B8B9] rounded-3xl ">
            <View className="flex-row">
              <MaterialIcons name="account-circle" size={50} className="opacity-55" />
              <View className="left-3 flex-row gap-32 items-center">
                <Text className="text-xl font-extrabold opacity-75">Welcome</Text>
                <Text className="text-lg font-light text-[#238C98]">Vi Hong Minh</Text>
              </View>
            </View>
            <View className="mt-5 flex-row justify-around items-center ">
              <TextInput
                placeholder="Search for hotels"
                className="pl-5 h-12 w-5/6 rounded-2xl border border-[#B8B8B9] "
              />
              <TouchableOpacity onPress={onSearchPress}>
                <MaterialIcons
                  name="search"
                  size={35}
                  className="absolute right-3 -top-5 opacity-65"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onListSearchPress}>
                <View className="bg-white border border-[#B8B8B9] ">
                  <MaterialIcons name="filter-list" size={35} color="#238C98" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="p-2 flex-row justify-between">
            <View className="h-8 border-b-4 border-[#238C98] opacity-65">
              <Text className="font-extrabold ">Near Me</Text>
            </View>
            <Text className="font-extrabold opacity-30">Recommended</Text>
            <Text className="font-extrabold opacity-30">Popular</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="h-45 bg-white rounded-3xl">
              <HomeThePheels />
              <MaterialIcons
                name="favorite"
                size={20}
                color="white"
                className="ml-2 mt-20 absolute"
              />
              <View className="p-2 gap-1">
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-bold">The pheels</Text>
                  <View className="flex-row items-center">
                    <MaterialIcons name="star" size={30} color="#FFB800" />
                    <Text className="mt-1 font-extrabold">4.5</Text>
                  </View>
                </View>
                <View className="flex-row">
                  <Location />
                  <Text>Ajah, Lagos</Text>
                </View>
                <View className="flex-row">
                  <Text className="font-bold opacity-70">25,000 $/</Text>
                  <Text className="font-bold opacity-50">night</Text>
                </View>
              </View>
            </View>
            <View className="ml-8 h-45 bg-[#FFFFFF] rounded-3xl ">
              <HomeEstabeer />
              <MaterialIcons
                name="favorite"
                size={20}
                color="white"
                className="ml-2 mt-20 absolute"
              />
              <View className="p-2 gap-1">
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-bold">Estebeez</Text>
                  <View className="flex-row items-center">
                    <MaterialIcons name="star" size={30} color="#FFB800" />
                    <Text className="mt-1 font-extrabold">3.7</Text>
                  </View>
                </View>
                <View className="flex-row">
                  <Location />
                  <Text>Ikoyi, Lagos</Text>
                </View>
                <View className="flex-row">
                  <Text className="font-bold opacity-70">5,000 $/</Text>
                  <Text className="font-bold opacity-50">night</Text>
                </View>
              </View>
            </View>
            <View className="ml-8 h-45 bg-[#FFFFFF] rounded-3xl ">
              <HomeFinese />
              <MaterialIcons
                name="favorite"
                size={20}
                color="white"
                className="ml-2 mt-20 absolute"
              />
              <View className="p-2 gap-1">
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-bold">Estebeez</Text>
                  <View className="flex-row items-center">
                    <MaterialIcons name="star" size={30} color="#FFB800" />
                    <Text className="mt-1 font-extrabold">4.2</Text>
                  </View>
                </View>
                <View className="flex-row">
                  <Location />
                  <Text>Surulere, Lagos</Text>
                </View>
                <View className="flex-row">
                  <Text className="font-bold opacity-70">10,000 $/</Text>
                  <Text className="font-bold opacity-50">night</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View className="flex-row p-2 justify-between">
            <Text className="font-extrabold ">Explore</Text>
            <TouchableOpacity onPress={onSeeAllHotels}>
              <Text className="font-bold text-[#238C98]">See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row p-2 gap-2 h-45 bg-[#FFFFFF] rounded-3xl ">
              <HomeAbuja />
              <View className="flex-col justify-center items-center">
                <Text className="font-bold opacity-50 ">324 Hotels</Text>
                <Text className="font-bold opacity-50">In</Text>
                <Text className="font-bold">Abuja</Text>
              </View>
            </View>
            <View className="flex-row ml-5 p-2 gap-2 h-45 bg-[#FFFFFF] rounded-3xl ">
              <HomeOyo />
              <View className="flex-col justify-center items-center">
                <Text className="font-bold opacity-50 ">433 Hotels</Text>
                <Text className="font-bold opacity-50">In</Text>
                <Text className="font-bold">Oyo</Text>
              </View>
            </View>
            <View className="flex-row ml-5 p-2 gap-2 h-45 bg-[#FFFFFF] rounded-3xl ">
              <HomeLagos />
              <View className="flex-col justify-center items-center">
                <Text className="font-bold opacity-50 ">511 Hotels</Text>
                <Text className="font-bold opacity-50">In</Text>
                <Text className="font-bold">Lagos</Text>
              </View>
            </View>
          </ScrollView>
          <View className="flex-row justify-between">
            <Text className="font-extrabold">Details Discount</Text>
            <TouchableOpacity onPress={onSeeAllDetailsDiscount}>
              <Text className="font-bold text-[#238C98]">See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="ml-4">
              <HomeBooking />
              <View className="absolute p-3 opacity-85">
                <Text className="text-white text-xl font-bold">Get</Text>
                <View className="flex-row">
                  <Text className="text-white text-xl font-bold">10% OFF</Text>
                  <Text className="text-white text-xl font-bold"> on your</Text>
                </View>
                <Text className="text-white text-xl">first booking</Text>
              </View>
            </View>
            <View className="ml-4">
              <HomeBooking />
              <View className="absolute p-3 opacity-85">
                <Text className="text-white text-xl font-bold">Get</Text>
                <View className="flex-row">
                  <Text className="text-white text-xl font-bold">25% OFF</Text>
                  <Text className="text-white text-xl font-bold"> on your</Text>
                </View>
                <Text className="text-white text-xl">first booking</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
