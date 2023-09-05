import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import PageDrawer from './PageDrawer';
import ReportError from '../container/Page/Authentication/ReportError/ReportError';
import { Provider } from 'react-redux';
import {store} from '../shared-state/Redux/store';
import PopupProductGift from '../component/Popup/PopupProductGift';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='PageDrawer'>
            <Stack.Screen name='AuthenticationStack' component={AuthenticationStack}/>
            <Stack.Screen name='PageDrawer' component={PageDrawer}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})