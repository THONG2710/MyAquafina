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
import HomePage from './src/presentation/container/ReBirthStation/HomePage/HomePage';
import Instructions from './src/presentation/container/ReBirthStation/Instructions/Instructions';
import Loading from './src/presentation/container/ReBirthStation/Loading/Loading';
import QRCode from './src/presentation/container/ReBirthStation/QRCode/QRCode';
import Start from './src/presentation/container/ReBirthStation/Start/Start';
import RebirthStationStack from './src/presentation/navigation/RebirthStationStack';
import PopupThanks from './src/presentation/component/Popup/PopupThanks';
import Background from './src/presentation/component/Background/Background';
import CircleButton from './src/presentation/component/Button/CircleButton';


function App(): JSX.Element {
  return (
    // <HomePage/>
    // <Instructions />
    // <Loading/>
    // <QRCode/>
    // <Start/>
    <RebirthStationStack/>
    // <PopupThanks/>
    // <Background/>
    // <CircleButton/>
  );
}

const styles = StyleSheet.create({});

export default App;
