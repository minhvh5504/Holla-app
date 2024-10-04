import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

interface CustomBottomTabProps {
  iconName: any
  label: string
  color: string
  focused: boolean
  onPress: () => void
}

const CustomBottomTab = ({ iconName, label, color, focused, onPress }: CustomBottomTabProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.2}>
      <View style={styles.circleContainer}>
        <MaterialIcons name={iconName} size={30} color={focused ? '#238C98' : color} />
        <Text style={[styles.label, focused ? styles.focusedLabel : styles.unfocusedLabel]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  focusedLabel: {
    color: '#238C98',
  },
  unfocusedLabel: {
    color: '#B8B8B9',
  },
})

export default CustomBottomTab
