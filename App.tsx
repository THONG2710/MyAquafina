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
import ButtonImg from './src/presentation/component/Button/ButtonImg';
import TextFeild from './src/presentation/component/Input/TextFeild';
import SignIn from './src/presentation/container/Page/Authentication/SignIn/SignIn';
import SignUp from './src/presentation/container/Page/Authentication/SignUp/SignUp';
import OTP from './src/presentation/container/Page/Authentication/OTP/OTP';
import SignUpSuccess from './src/presentation/container/Page/Authentication/SignUpSuccess/SignUpSuccess';
import Error from './src/presentation/container/Page/Authentication/Error/Error';
import ReportError from './src/presentation/container/Page/Authentication/ReportError/ReportError';
import HeaderComponent from './src/presentation/component/header/HeaderComponent';
import HomeMain from './src/presentation/container/Page/PageMain/Home/HomeMain';
import PageDrawer from './src/presentation/navigation/PageDrawer';
import Charts from './src/presentation/container/Page/PageMain/Home/Charts';
import ItemChartVIP from './src/presentation/component/Item/ItemChart';
import Present from './src/presentation/container/Page/PageMain/Home/Present';
import ItemSlideGift from './src/presentation/component/Item/ItemSlideGift';
import SwipperTest from './src/presentation/container/Page/PageMain/Home/SwipperTest';
import Address from './src/presentation/container/Page/PageMain/Home/Address';
import Footer from './src/presentation/container/Page/PageMain/Home/Footer';


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
    // <SignIn/>
    // <ButtonImg/>
    // <TextFeild/>
    // <OTP/>
    // <SignUp/>
    // <SignUpSuccess/>
    // <Error/>
    // <ReportError/>
    // <HeaderComponent/>
    // <HomeMain/>
    <PageDrawer/>
    // <Charts/>
    // <ItemChart/>
    // <Present/>
    // <TestSlide/>
    // <ItemSlideGift/>
    // <SwipperTest/>
    // <Address/>
    // <Footer/>
  );
}

const styles = StyleSheet.create({});

export default App;
