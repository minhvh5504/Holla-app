import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BookingScreen from '@views/BookingScreen'
import FavouriteScreen from '@views/FavouriteScreen'
import HomeScreen from '@views/HomeScreen'
import NotificationScreen from '@views/NotificationScreen'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="home" size={30} color="#238C98" />,
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="view-list" size={30} color="#B8B8B9" />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="notifications" size={30} color="#B8B8B9" />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="favorite" size={30} color="#B8B8B9" />,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
