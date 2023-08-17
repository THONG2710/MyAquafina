import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeMain from '../container/Page/PageMain/Home/HomeMain';
import Error from '../container/Page/Authentication/Error/Error';
import HomePage from '../container/ReBirthStation/HomePage/HomePage';
import PureWorld from '../container/Page/PageMain/PureWorld/PureWorld';

const Drawer = createDrawerNavigator();

const PageDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name='HomePage' component={HomeMain}/>
        <Drawer.Screen name='PureWorld' component={PureWorld}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default PageDrawer;

const styles = StyleSheet.create({});
