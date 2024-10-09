import Location from '@assets/svg/location.svg'
import NearHome from '@components/NearHome/NearHome'
import PopularHome from '@components/PopularHome/PopularHome'
import RecommendedHome from '@components/RecommendedHome/RecommendedHome'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'

const renderTabHeader = (title: string, activeTab: string, setActiveTab: (tab: string) => void) => (
  <TouchableOpacity
    className={`h-10 border-b-4 justify-center items-center ${
      activeTab === title ? 'border-[#238C98] opacity-70' : 'border-transparent'
    }`}
    onPress={() => setActiveTab(title)}
  >
    <Text
      className={`font-extrabold text-xl ${activeTab === title ? 'black opacity-90' : 'text-opacity-30 text-[#B8B8B9]'}`}
    >
      {title}
    </Text>
  </TouchableOpacity>
)

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [activeTab, setActiveTab] = useState('Near')

  const onMenuPress = () => {
    navigation.openDrawer()
  }

  const onSearchPress = () => {
    console.log('onSearchPress')
  }

  const onListSearchPress = () => {
    console.log('onListSearchPress')
  }

  return (
    <View className="bg-[#F4F4F4]">
      <ScrollView>
        <View className="mt-10 gap-5 p-5">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={onMenuPress}>
              <MaterialIcons name="menu" size={30} />
            </TouchableOpacity>
            <View className="flex-col">
              <Text className="text-neutral-400 font-light">Current Location</Text>
              <View className="flex-row">
                <Location />
                <Text className="ml-3 font-normal">Ajah, Lagos</Text>
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
        </View>
        <View className="p-5 flex-row justify-between">
          {renderTabHeader('Near', activeTab, setActiveTab)}
          {renderTabHeader('Recommended', activeTab, setActiveTab)}
          {renderTabHeader('Popular', activeTab, setActiveTab)}
        </View>
        <View>
          {activeTab === 'Near' && <NearHome />}
          {activeTab === 'Recommended' && <RecommendedHome />}
          {activeTab === 'Popular' && <PopularHome />}
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
