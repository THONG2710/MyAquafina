import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from '../container/ReBirthStation/HomePage/HomePage';
import Loading from '../container/ReBirthStation/Loading/Loading';
import Start from '../container/ReBirthStation/Start/Start';
import QRCode from '../container/ReBirthStation/QRCode/QRCode';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReBirthStationParamList } from '../storyboard';
import Instructions from '../container/ReBirthStation/Instructions/Instructions';

const Stack = createNativeStackNavigator<ReBirthStationParamList>();

const RebirthStationStack = () => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={options}>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name='Instructions' component={Instructions} />
          <Stack.Screen name='Start' component={Start}/>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name='QRCode' component={QRCode}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RebirthStationStack

const styles = StyleSheet.create({})