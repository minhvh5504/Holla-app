import CustomBottomTab from '@components/CustomBottomTab/CustomBottomTab'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BookingScreen from '@views/BookingScreen'
import FavouriteScreen from '@views/FavouriteScreen'
import HomeScreen from '@views/HomeScreen'
import NotificationScreen from '@views/NotificationScreen'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarStyle: {
          marginLeft: 2,
          width: '99%',
          height: 80,
          backgroundColor: 'white',
          borderRadius: 35,
          justifyContent: 'center',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: (props: any) => (
            <CustomBottomTab
              iconName="home"
              label="Home"
              color="#B8B8B9"
              focused={props.accessibilityState.selected}
              onPress={props.onPress}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarButton: (props: any) => (
            <CustomBottomTab
              iconName="view-list"
              label="Booking"
              color="#B8B8B9"
              focused={props.accessibilityState.selected}
              onPress={props.onPress}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarButton: (props: any) => (
            <CustomBottomTab
              iconName="favorite"
              label="Favourite"
              color="#B8B8B9"
              focused={props.accessibilityState.selected}
              onPress={props.onPress}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarButton: (props: any) => (
            <CustomBottomTab
              iconName="notifications"
              label="Notifications"
              color="#B8B8B9"
              focused={props.accessibilityState.selected}
              onPress={props.onPress}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
