import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal, Button } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import BackUpIcon from '@components/BackUp/BackUpIcon'
import EstabeerHotel from '@assets/svg/estabeezhotel.svg'
import FineseHotel from '@assets/svg/finesehotel.svg'
import AzaoniapelHotel from '@assets/svg/homeazaoniapel.svg'
import GrandblissHotel from '@assets/svg/homegrandbliss.svg'
import SunshineHotel from '@assets/svg/homesunshine.svg'
import ThebrexelHotel from '@assets/svg/homethebrexel.svg'
import ThepearlsHotel from '@assets/svg/homethepearls.svg'
import KrisfelvHotel from '@assets/svg/krisfelvhotel.svg'
import Location from '@assets/svg/location.svg'
import ThePheelsHotel from '@assets/svg/thepheelshotel.svg'

type FavouriteItem = {
  id: number
  name: string
  location: string
  price: string
  home: JSX.Element
  rate: string
}

const FavouriteScreen = ({ navigation }: any) => {
  const [favourites, setFavourites] = useState<FavouriteItem[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<FavouriteItem | null>(null)

  useEffect(() => {
    const data: FavouriteItem[] = [
      {
        id: 1,
        name: 'Estabeez Hotel',
        location: 'Ikoyi, Lagos',
        price: '5,000$',
        home: <EstabeerHotel />,
        rate: '4.5',
      },
      {
        id: 2,
        name: 'The Pheels Hotel',
        location: 'Ajah, Lagos',
        price: '25,000$',
        home: <ThePheelsHotel />,
        rate: '4.6',
      },
      {
        id: 3,
        name: 'Fine3se Hotel',
        location: 'Surulere, Lagos',
        price: '36,000$',
        home: <FineseHotel />,
        rate: '3.2',
      },
      {
        id: 4,
        name: 'Sunshine Hotel',
        location: 'Ife, Osun',
        price: '84,000$',
        home: <SunshineHotel />,
        rate: '2.3',
      },
      {
        id: 5,
        name: 'Azaonia Pel Hotel',
        location: 'Bori, Porthacourt',
        price: '32,000$',
        home: <AzaoniapelHotel />,
        rate: '4.3',
      },
      {
        id: 6,
        name: 'The Brexel Hotel',
        location: 'Ikeja',
        price: '25,000$',
        home: <ThebrexelHotel />,
        rate: '3.5',
      },
      {
        id: 7,
        name: 'Grand Bliss Hotel',
        location: 'Epe, Lagos',
        price: '100,000$',
        home: <GrandblissHotel />,
        rate: '3.5',
      },
      {
        id: 8,
        name: 'Krisfel V Hotel',
        location: 'Festac, Lagos',
        price: '25,000$',
        home: <KrisfelvHotel />,
        rate: '4.4',
      },
      {
        id: 9,
        name: 'The Pearls Hotel',
        location: 'GRA, ilorin',
        price: '14,000$',
        home: <ThepearlsHotel />,
        rate: '3.8',
      },
    ]
    setFavourites(data)
  }, [])

  const onBackUp = () => {
    navigation.goBack()
  }

  const onRemoveFavorite = (id: number) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id))
  }

  const handleDeleteConfirmation = (item: FavouriteItem) => {
    setSelectedItem(item)
    setIsModalVisible(true)
  }

  const confirmDelete = () => {
    if (selectedItem) {
      onRemoveFavorite(selectedItem.id)
    }
    setIsModalVisible(false)
    setSelectedItem(null)
  }

  return (
    <ScrollView>
      <View className="flex-row items-center gap-6">
        <TouchableOpacity onPress={onBackUp}>
          <BackUpIcon />
        </TouchableOpacity>
        <Text className="mt-20 text-2xl font-bold">Favourites</Text>
      </View>

      {favourites.map((item) => (
        <View key={item.id} className="mt-5 p-3">
          <View className="flex-row gap-6 bg-[#E3E3E4] h-34 p-2 rounded-2xl">
            {item.home}
            <TouchableOpacity
              onPress={() => handleDeleteConfirmation(item)}
              className="mt-3 right-3 absolute"
            >
              <MaterialIcons name="favorite" size={25} color="#238C98" />
            </TouchableOpacity>
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
            <View className="flex-row items-center mt-20 right-3 absolute">
              <MaterialIcons name="star" size={20} color="#FFB800" />
              <Text className="mt-1 font-bold opacity-60">{item.rate}</Text>
            </View>
          </View>
          <Modal
            transparent
            visible={isModalVisible}
            animationType="slide"
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View className="flex-1 justify-end items-center bg-opacity-50 ">
              <View className="mb-6 bg-white p-2 rounded-t-3xl rounded-b-3xl w-11/12">
                <View className=" gap-6 justify-center items-center">
                  <View className="mt-5 border-t-2 w-20 opacity-50" />
                  <Text className="text-lg font-extrabold opacity-70">Remove from bookmark?</Text>
                </View>
                {selectedItem && (
                  <View className="flex-row gap-6 bg-[#E3E3E4] h-34 p-2 rounded-2xl">
                    {selectedItem.home}
                    <View className="gap-2">
                      <Text className="mt-2 text-base font-bold text-[#238C98]">
                        {selectedItem.name}
                      </Text>
                      <View className="flex-row gap-3">
                        <Location />
                        <Text>{selectedItem.location}</Text>
                      </View>
                      <View className="flex-row">
                        <Text className="font-bold opacity-70">{selectedItem.price} /</Text>
                        <Text className="font-bold opacity-50">night</Text>
                      </View>
                    </View>
                    <View className="flex-row items-center mt-20 right-3 absolute">
                      <MaterialIcons name="star" size={20} color="#FFB800" />
                      <Text className="mt-1 font-bold opacity-60">{selectedItem.rate}</Text>
                    </View>
                  </View>
                )}

                <View className="flex-row justify-around mt-16">
                  <TouchableOpacity
                    onPress={() => setIsModalVisible(false)}
                    className="h-14 w-40 items-center justify-center bg-[#238C98] rounded-2xl opacity-60"
                  >
                    <Text className="text-white font-bold">Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={confirmDelete}
                    className="h-14 w-40 items-center justify-center bg-[#238C98] rounded-2xl"
                  >
                    <Text className="text-white font-bold">Yes, remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ))}
    </ScrollView>
  )
}

export default FavouriteScreen
