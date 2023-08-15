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
import PopupErrorMessage from './src/presentation/component/Popup/PopupErrorMessage';
import PopupSuccessfulErrorReport from './src/presentation/component/Popup/PopupSuccessfulErrorReport';
import PopupAccumulatePoints from './src/presentation/component/Popup/PopupAccumulatePoints';
import PopupTimeUp from './src/presentation/component/Popup/PopupTimeUp';
import PopupNotification from './src/presentation/component/Popup/PopupNotification';
import SignIn from './src/presentation/container/Page/Authentication/SignIn';
import ButtonImg from './src/presentation/component/Button/ButtonImg';
import TextFeild from './src/presentation/component/Input/TextFeild';


function App(): JSX.Element {
  return (
    // <HomePage/>
    // <Instructions />
    // <Loading/>
    // <QRCode/>
    // <Start/>
    // <RebirthStationStack/>
    // <PopupThanks/>
    // <Background/>
    // <CircleButton/>
    // <PopupErrorMessage/>
    // <PopupSuccessfulErrorReport/>
    // <PopupAccumulatePoints/>
    // <PopupTimeUp/>
    // <PopupNotification/>
    <SignIn/>
    // <ButtonImg/>
    // <TextFeild/>
  );
}

const styles = StyleSheet.create({});

export default App;
