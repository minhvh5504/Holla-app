import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

const LoginScreen = () => {
  const [isCheck, setCheck] = useState(false)
  return (
    <View>
      <View>
        <MaterialIcons name="arrow-back" size={32} className="mt-16 left-3" />
        <View className="mt-20 items-center justify-center flex-row gap-10">
          <Text className="color-teal-700 text-3xl font-bold border-b-2 h-11 border-blue-500">
            Log in
          </Text>
          <Text className="color-neutral-500 text-3xl font-bold">Sign up</Text>
        </View>
      </View>
      <View className="mt-5 p-8">
        <MaterialIcons name="person" size={25} className="mt-16 px-8 absolute opacity-60" />
        <TextInput placeholder="Username" className="mt-6 px-10 border-b-2 h-12 border-blue-300" />
        <MaterialIcons name="lock" size={25} className="mt-40 px-8 absolute opacity-60" />
        <TouchableOpacity>
          <FontAwesome name="eye-slash" size={25} className="mt-14 absolute opacity-60 right-2" />
        </TouchableOpacity>
        <TextInput placeholder="Password" className="mt-12 px-10 border-b-2 h-12 border-blue-300" />
        <View className="mt-10 flex-row gap-2">
          <Checkbox
            value={isCheck}
            onValueChange={setCheck}
            color={isCheck ? 'green' : undefined}
          />
          <Text className="text-base font-normal">Remeber Me</Text>
          <TouchableOpacity>
            <Text className="mx-32 text-base font-medium">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-14 items-center flex gap-12">
        <View className="justify-center items-center w-80 h-12 bg-teal-700 rounded-xl">
          <TouchableOpacity>
            <Text className="color-white text-lg font-bold">Log in</Text>
          </TouchableOpacity>
        </View>
        <Text>or</Text>
        <View className="flex-row gap-8">
          <Image source={require('@assets/image/login/logoGoogle.png')} />
          <Image source={require('@assets/image/login/logoApple.png')} />
        </View>
      </View>
      <View className="mt-28 flex-row gap-3 justify-center w-11/12">
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text className="font-medium color-teal-800">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen
