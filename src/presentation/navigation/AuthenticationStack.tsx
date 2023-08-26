import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../container/Page/Authentication/SignIn/SignIn';
import { AuthenticationParamList } from '../storyboard/AuthenticationStoryBoard';
import OTP from '../container/Page/Authentication/OTP/OTP';
import PageDrawer from './PageDrawer';
import SignUp from '../container/Page/Authentication/SignUp/SignUp';
import SignUpSuccess from '../container/Page/Authentication/SignUpSuccess/SignUpSuccess';

const Stack = createNativeStackNavigator<AuthenticationParamList>();

const AuthenticationStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name='OTP' component={OTP}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='SignUpSuccess' component={SignUpSuccess}/>
        <Stack.Screen name='PageDrawer' component={PageDrawer}/>
      </Stack.Navigator>
  );
};

export default AuthenticationStack;

const styles = StyleSheet.create({});
