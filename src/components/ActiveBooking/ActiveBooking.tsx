import EstabeerHotel from '@assets/svg/estabeezhotel.svg'
import FineseHotel from '@assets/svg/finesehotel.svg'
import AzaoniapelHotel from '@assets/svg/homeazaoniapel.svg'
import SunshineHotel from '@assets/svg/homesunshine.svg'
import Location from '@assets/svg/location.svg'
import ThePheelsHotel from '@assets/svg/thepheelshotel.svg'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native'

type BookingData = {
  id: number
  name: string
  location: string
  price: string
  home: JSX.Element
}

const ActiveBooking = (props: any) => {
  const { navigation } = props
  const activeBooking: BookingData[] = [
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

  const [bookings, setBookings] = useState<BookingData[]>(activeBooking)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<BookingData | null>(null)

  const onRemoveBooking = (id: number) => {
    setBookings((prev) => prev.filter((item) => item.id !== id))
  }

  const handleDeleteConfirmation = (item: BookingData) => {
    setSelectedItem(item)
    setIsModalVisible(true)
  }

  const confirmDelete = () => {
    if (selectedItem) {
      onRemoveBooking(selectedItem.id)
    }
    setIsModalVisible(false)
    setSelectedItem(null)
  }

  const onViewBookingPress = (item: BookingData) => {
    console.log('onViewDetailsBooking')
  }

  const renderItem = ({ item }: { item: BookingData }) => (
    <View className="p-5">
      <View className="flex-col p-3 bg-[#E3E3E4] h-52 rounded-2xl">
        <View className="flex-row gap-6">
          {item.home}
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
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity
            onPress={() => handleDeleteConfirmation(item)}
            className="h-14 px-10 border-2 border-[#238C98] rounded-full justify-center"
          >
            <Text className="font-bold text-[#238C98]">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onViewBookingPress(item)}
            className="h-14 px-4 bg-[#238C98] rounded-3xl justify-center"
          >
            <Text className="font-bold text-white">View Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  return (
    <>
      <FlatList
        data={bookings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        transparent
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 p-2 justify-end items-center bg-opacity-50 ">
          <View className="mb-6 bg-white p-5 rounded-t-3xl rounded-b-3xl w-full">
            <View className=" gap-6 justify-center items-center">
              <View className="mt-6 border-t-2 w-20 opacity-50" />
              <Text className="text-2xl text-red-700 font-extrabold opacity-70">
                Cancel Booking?
              </Text>
              <View className="justify-center items-center">
                <Text className="text-xl font-bold opacity-70 ">
                  Are you sure you want to cancel
                </Text>
                <Text className="text-xl font-bold opacity-70">your hotel booking?</Text>
                <Text className="mt-10 text-xl font-normal opacity-70">
                  Only 80% would be refunded
                </Text>
                <Text className="text-xl font-normal  opacity-70">according to our policy</Text>
              </View>
            </View>
            <View className="flex-row mt-16 justify-around">
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                className="h-16 w-40 items-center justify-center bg-[#238C98] rounded-2xl opacity-60"
              >
                <Text className="text-white font-bold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={confirmDelete}
                className="h-16 w-40 items-center justify-center bg-[#238C98] rounded-2xl"
              >
                <Text className="text-white font-bold">Yes,Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default ActiveBooking
