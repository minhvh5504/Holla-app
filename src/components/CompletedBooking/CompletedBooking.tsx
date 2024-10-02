import DivineHotel from '@assets/svg/divinehotel.svg'
import Location from '@assets/svg/location.svg'
import LvgHotel from '@assets/svg/lvghotel.svg'
import VencinHotel from '@assets/svg/vencinhotel.svg'
import MaterialComnunnityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

type BookingData = {
  id: number
  name: string
  location: string
  price: string
  home: JSX.Element
}

const CompletedBooking = () => {
  const completedBooking: BookingData[] = [
    {
      id: 1,
      name: 'Veclin Hotel',
      location: 'Vi, Lagos',
      price: '25,000$',
      home: <VencinHotel />,
    },
    {
      id: 2,
      name: 'Divine Hotel',
      location: 'Bodija, Ibadan',
      price: '100,000$',
      home: <DivineHotel />,
    },
    {
      id: 3,
      name: 'Lvg  Hotel',
      location: 'Gwagwalada, Abuja',
      price: '25,000$',
      home: <LvgHotel />,
    },
    {
      id: 4,
      name: 'Lvg  Hotel',
      location: 'Gwagwalada, Abuja',
      price: '25,000$',
      home: <LvgHotel />,
    },
    {
      id: 5,
      name: 'Lvg  Hotel',
      location: 'Gwagwalada, Abuja',
      price: '25,000$',
      home: <LvgHotel />,
    },
  ]
  const renderItem = ({ item }: { item: BookingData }) => (
    <View className="p-5">
      <View className="flex-col p-3 bg-[#E3E3E4] h-52 rounded-2xl">
        <View className="flex-row gap-6">
          {item.home}
          <MaterialComnunnityIcons
            name="check-circle"
            size={20}
            color="#238C98"
            te
            right-0FA9580FA9580FA9581
            className="right-1 absolute"
          />
          <View className="gap-2">
            <Text className="mt-2 text-base font-bold">{item.name}</Text>
            <View className="flex-row gap-3">
              <Location />
              <Text>{item.location}</Text>
            </View>
            <View className="flex-row">
              <Text className="font-bold opacity-70">{item.price} /</Text>
              <Text className="font-bold opacity-50">night</Text>
            </View>
          </View>
        </View>
        <View className="flex-row justify-center mt-5">
          <TouchableOpacity className="h-14 px-20 bg-[#238C98] opacity-60 rounded-full justify-center">
            <Text className="font-bold text-white">Booking Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  return (
    <FlatList
      data={completedBooking}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default CompletedBooking
