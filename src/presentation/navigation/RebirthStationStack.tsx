import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../container/RVM/HomePage';
import Loading from '../container/RVM/Loading';
import Instructions from '../container/RVM/Instructions';
import Start from '../container/RVM/Start';
import QRCode from '../container/RVM/QRCode';

const Stack = createStackNavigator();

const RebirthStationStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name='Instructions' component={Instructions}/>
        <Stack.Screen name='Start' component={Start}/>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name='QRCode' component={QRCode}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RebirthStationStack

const styles = StyleSheet.create({})