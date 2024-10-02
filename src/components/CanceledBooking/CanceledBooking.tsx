import EstabeerHotel from '@assets/svg/estabeezhotel.svg'
import FineseHotel from '@assets/svg/finesehotel.svg'
import AzaoniapelHotel from '@assets/svg/homeazaoniapel.svg'
import SunshineHotel from '@assets/svg/homesunshine.svg'
import Location from '@assets/svg/location.svg'
import ThePheelsHotel from '@assets/svg/thepheelshotel.svg'
import MaterialComnunnityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { View, Text, FlatList } from 'react-native'

type BookingData = {
  id: number
  name: string
  location: string
  price: string
  home: JSX.Element
}

const CanceledBooking = () => {
  const canceledBooking: BookingData[] = [
    {
      id: 1,
      name: 'Estabeez Hotel',
      location: 'Ikoyi, Lagos',
      price: '5,000$',
      home: <EstabeerHotel />,
    },
    {
      id: 2,
      name: 'The Pheels Hotel',
      location: 'Ajah, Lagos',
      price: '25,000$',
      home: <ThePheelsHotel />,
    },
    {
      id: 3,
      name: 'Fine3se Hotel',
      location: 'Surulere, Lagos',
      price: '36,000$',
      home: <FineseHotel />,
    },
    {
      id: 4,
      name: 'Sunshine Hotel',
      location: 'Ife, Osun',
      price: '84,000$',
      home: <SunshineHotel />,
    },
    {
      id: 5,
      name: 'Azaonia Pel Hotel',
      location: 'Bori, Porthacourt',
      price: '32,000$',
      home: <AzaoniapelHotel />,
    },
  ]
  const renderItem = ({ item }: { item: BookingData }) => (
    <View className="p-5">
      <View className="flex-col p-3 bg-[#E3E3E4] h-52 rounded-2xl">
        <View className="flex-row gap-6">
          {item.home}
          <MaterialComnunnityIcons
            name="alert-circle"
            size={20}
            color="red"
            className="absolute right-1"
          />
          <View className="gap-3">
            <Text className="mt-2 text-base font-bold">{item.name}</Text>
            <View className="flex-row gap-3">
              <Location />
              <Text>{item.location}</Text>
            </View>
            <Text className="font-semibold opacity-60 text-red-600">Canceled & refunded</Text>
          </View>
        </View>
        <View className="mt-10 items-center">
          <Text className="font-bold opacity-80 text-red-600">You canceled this hotel booking</Text>
        </View>
      </View>
    </View>
  )

  return (
    <FlatList
      data={canceledBooking}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}
export default CanceledBooking
