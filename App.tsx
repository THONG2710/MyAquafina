/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomePage from './src/presentation/container/RVM/HomePage';
import Instructions from './src/presentation/container/RVM/Instructions';
import Loading from './src/presentation/container/RVM/Loading';
import QRCode from './src/presentation/container/RVM/QRCode';
import Start from './src/presentation/container/RVM/Start';
import RebirthStationStack from './src/presentation/navigation/RebirthStationStack';


function App(): JSX.Element {
  return (
    // <HomePage/>
    // <Instructions/>
    // <Loading/>
    // <QRCode/>
    // <Start/>
    <RebirthStationStack/>
  );
}

const styles = StyleSheet.create({});

export default App;
