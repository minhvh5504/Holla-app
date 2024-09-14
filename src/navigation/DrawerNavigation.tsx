import CustomDrawer from '@components/CustomDrawer/CustomDrawer'
import MaterialComnunnityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LocationScreen from '@views/LocationScreen'
import NotificationScreen from '@views/NotificationScreen'
import ProfileScreen from '@views/ProfileScreen'

import BottomTabNavigation from './BottomTabNavigation'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabNavigation}
        options={{
          title: 'Home',
          drawerIcon: () => <MaterialComnunnityIcons name="home" size={30} color="white" />,
          drawerLabelStyle: { color: 'white' },
        }}
      />
      <Drawer.Screen
        name="Edit Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => <MaterialComnunnityIcons name="account-edit" size={30} color="white" />,
          drawerLabelStyle: { color: 'white' },
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerIcon: () => <MaterialIcons name="notifications" size={30} color="white" />,
          drawerLabelStyle: { color: 'white' },
        }}
      />
      <Drawer.Screen
        name="Location"
        component={LocationScreen}
        options={{
          drawerIcon: () => <MaterialIcons name="location-on" size={30} color="white" />,
          drawerLabelStyle: { color: 'white' },
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
