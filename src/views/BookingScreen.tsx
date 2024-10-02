import ActiveBooking from '@components/ActiveBooking/ActiveBooking'
import CanceledBooking from '@components/CanceledBooking/CanceledBooking'
import CompletedBooking from '@components/CompletedBooking/CompletedBooking'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const renderTab = (title: string, activeTab: string, setActiveTab: (tab: string) => void) => (
  <TouchableOpacity
    className={`h-12 w-32 rounded-full justify-center items-center ${
      activeTab === title ? 'bg-[#238C98]' : 'border-2 border-[#238C98]'
    }`}
    onPress={() => setActiveTab(title)}
  >
    <Text className={`font-semibold ${activeTab === title ? 'text-white' : 'text-[#238C98]'}`}>
      {title}
    </Text>
  </TouchableOpacity>
)

const BookingScreen = () => {
  const [activeTab, setActiveTab] = useState('Active')

  const onSearchPress = () => {
    console.log('onSearchPress')
  }

  return (
    <View style={{ flex: 1 }}>
      <View className="flex-row mt-16 mx-6 justify-between items-center">
        <Text className="text-3xl font-bold">My Booking</Text>
        <TouchableOpacity onPress={onSearchPress}>
          <MaterialIcons name="search" size={30} className="opacity-65" />
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-6 mt-10 ml-6 mb-5">
        {renderTab('Active', activeTab, setActiveTab)}
        {renderTab('Completed', activeTab, setActiveTab)}
        {renderTab('Canceled', activeTab, setActiveTab)}
      </View>

      {activeTab === 'Active' && <ActiveBooking />}
      {activeTab === 'Completed' && <CompletedBooking />}
      {activeTab === 'Canceled' && <CanceledBooking />}
    </View>
  )
}

export default BookingScreen
