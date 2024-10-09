import HomeAbuja from '@assets/svg/homeabuja.svg'
import HomeAzaonianpel from '@assets/svg/homeazaoniapelbig.svg'
import HomeBooking from '@assets/svg/homebooking.svg'
import HomeBreXel from '@assets/svg/homebrexelbig.svg'
import HomeEstabeer from '@assets/svg/homeestabeezbig.svg'
import HomeFinese from '@assets/svg/homefinesebig.svg'
import HomeGrandBliss from '@assets/svg/homegrandblissbig.svg'
import HomeKrisFelV from '@assets/svg/homekrisfelbig.svg'
import HomeLagos from '@assets/svg/homelagos.svg'
import HomeOyo from '@assets/svg/homeoyo.svg'
import HomeSunshine from '@assets/svg/homesunshinebig.svg'
import HomeThePearls from '@assets/svg/homethepealsbig.svg'
import HomeThePheels from '@assets/svg/homethepheelsbig.svg'
import Location from '@assets/svg/location.svg'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'

type HotelData = {
  id: string
  name: string
  location: string
  price: string
  rating: string
  Image: React.FC
}

type CityData = {
  id: string
  city: string
  hotels: number
  Image: React.FC
}

const popularData: HotelData[] = [
  {
    id: '1',
    name: 'Grand Bliss',
    location: 'Epe, Lagos',
    price: '48,000 $/night',
    rating: '4.5',
    Image: HomeGrandBliss,
  },
  {
    id: '2',
    name: 'The Pheels',
    location: 'Ajah, Lagos',
    price: '25,000 $/night',
    rating: '4.5',
    Image: HomeThePheels,
  },
  {
    id: '3',
    name: 'Sunshine',
    location: 'Ife, Osun',
    price: '50,000 $/night',
    rating: '4.8',
    Image: HomeSunshine,
  },
  {
    id: '4',
    name: 'Estebeez',
    location: 'Ikoyi, Lagos',
    price: '5,000 $/night',
    rating: '3.7',
    Image: HomeEstabeer,
  },
  {
    id: '5',
    name: 'Fine3se',
    location: 'Surulere, Lagos',
    price: '10,000 $/night',
    rating: '4.2',
    Image: HomeFinese,
  },
  {
    id: '6',
    name: 'Azaonia Pel',
    location: 'Bori, Porthacourt',
    price: '15,000 $/night',
    rating: '3.9',
    Image: HomeAzaonianpel,
  },

  {
    id: '7',
    name: 'Krisfel V',
    location: 'Festac, Lagos',
    price: '10,000 $/night',
    rating: '3.2',
    Image: HomeKrisFelV,
  },

  {
    id: '8',
    name: 'The Brexel',
    location: 'Ikeja, Lagos',
    price: '40,000 $/night',
    rating: '4.6',
    Image: HomeBreXel,
  },

  {
    id: '9',
    name: 'The Pheels',
    location: 'Ajah, Lagos',
    price: '25,000 $/night',
    rating: '4.5',
    Image: HomeThePheels,
  },
  {
    id: '10',
    name: 'The Pearls',
    location: 'GRA, ilorin',
    price: '45,000 $/night',
    rating: '4.7',
    Image: HomeThePearls,
  },
]

const exploreData: CityData[] = [
  { id: '1', city: 'Lagos', hotels: 511, Image: HomeLagos },
  { id: '2', city: 'Oyo', hotels: 433, Image: HomeOyo },
  { id: '3', city: 'Abuja', hotels: 324, Image: HomeAbuja },
  { id: '4', city: 'Abuja', hotels: 324, Image: HomeAbuja },
  { id: '5', city: 'Lagos', hotels: 511, Image: HomeLagos },
  { id: '6', city: 'Oyo', hotels: 433, Image: HomeOyo },
  { id: '7', city: 'Abuja', hotels: 324, Image: HomeAbuja },
  { id: '8', city: 'Lagos', hotels: 511, Image: HomeLagos },
  { id: '9', city: 'Oyo', hotels: 433, Image: HomeOyo },
]

const discountData = [
  { id: '1', text: '5% OFF on your first booking', Icon: HomeBooking },
  { id: '2', text: '10% OFF on your first booking', Icon: HomeBooking },
  { id: '3', text: '15% OFF on your first booking', Icon: HomeBooking },
  { id: '4', text: '20% OFF on your first booking', Icon: HomeBooking },
  { id: '5', text: '25% OFF on your first booking', Icon: HomeBooking },
  { id: '6', text: '30% OFF on your first booking', Icon: HomeBooking },
]
const PopularHome = () => {
  const scrollX = useSharedValue(0)
  const ref = useAnimatedRef<Animated.FlatList<any>>()
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const interval = useRef<NodeJS.Timeout>()
  const offset = useSharedValue(0)

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x
    },
  })

  useEffect(() => {
    if (isAutoPlay) {
      interval.current = setInterval(() => {
        offset.value = (offset.value + 1) % popularData.length
      }, 2000)
    } else {
      clearInterval(interval.current)
    }
    return () => {
      clearInterval(interval.current)
    }
  }, [isAutoPlay, offset])

  useDerivedValue(() => {
    scrollTo(ref, offset.value * 200, 0, true)
  })

  const onSeeAllHotels = () => {
    console.log('onSeeAllHotelsPress')
  }

  const onSeeAllDetailsDiscount = () => {
    console.log('onSeeAllDetailsDiscount')
  }

  const onFavoriteHotel = () => {
    console.log('onFavoriteHotel')
  }

  return (
    <View>
      <Animated.FlatList
        ref={ref}
        horizontal
        data={popularData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="ml-5 h-45 bg-[#FFFFFF] rounded-3xl">
            <item.Image />
            <TouchableOpacity onPress={onFavoriteHotel} className="ml-2 mt-20 absolute">
              <MaterialIcons name="favorite" size={25} color="white" />
            </TouchableOpacity>
            <View className="p-2 gap-1">
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-bold">{item.name}</Text>
                <View className="flex-row items-center">
                  <MaterialIcons name="star" size={30} color="#FFB800" />
                  <Text className="mt-1 font-extrabold">{item.rating}</Text>
                </View>
              </View>
              <View className="flex-row">
                <Location />
                <Text>{item.location}</Text>
              </View>
              <View className="flex-row">
                <Text className="font-bold opacity-70">{item.price}</Text>
              </View>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false)
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true)
        }}
      />

      <View className="p-5 flex-row justify-between">
        <Text className="font-extrabold ">Explore</Text>
        <TouchableOpacity onPress={onSeeAllHotels}>
          <Text className="font-bold text-[#238C98]">See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={exploreData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row ml-5 p-3 gap-3 h-45 bg-[#FFFFFF] rounded-3xl">
            <item.Image />
            <View className="flex-col justify-center items-center">
              <Text className="font-bold opacity-50 ">{item.hotels} Hotels</Text>
              <Text className="font-bold opacity-50">In</Text>
              <Text className="font-bold">{item.city}</Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      />

      <View className="p-5 flex-row justify-between">
        <Text className="font-extrabold">Details Discount</Text>
        <TouchableOpacity onPress={onSeeAllDetailsDiscount}>
          <Text className="font-bold text-[#238C98]">See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={discountData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="ml-5">
            <item.Icon />
            <View className="absolute p-3 opacity-85">
              <Text className="text-white text-xl font-bold">Get</Text>
              <View className="flex-row">
                <Text className="text-white text-xl font-bold">{item.text}</Text>
              </View>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      />
    </View>
  )
}

export default PopularHome
