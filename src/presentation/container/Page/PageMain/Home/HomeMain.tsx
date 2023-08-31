import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import {colors} from '../../../../resource/values/color';
import ButtonImg from '../../../../component/Button/ButtonImg';
import {fonts} from '../../../../resource/values/fonts';
import Charts from './Charts';
import Present from './Present';
import Address from './Address';
import Footer from '../Middle/Footer';
import Banners from './Banners/Banners';
import {HomeMainProp} from './type';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../shared-state/Redux/Hook/Hook';
import {getMyPlace} from '../../../../shared-state/Redux/Actions/AuthenticationActions';
import { fetchUsers } from '../../../../shared-state/Redux/Thunks/GetUsersThunks';

const HomeMain: React.FC<HomeMainProp> = props => {
  const {navigation} = props;
  const listUsers = useAppSelector(state => state.UsersReduer.listUsers);
  const currentUser = useAppSelector(state => state.LoginReducer.user);
  const isLogged = useAppSelector(state => state.authentication.isLogged);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (isLogged) {
      listUsers.map((item, index) => {
        if (item.phoneNumber == currentUser.phoneNumber) {
          dispatch(getMyPlace(index+1));  
        }
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderComponent headerStyle={styles.header} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* banner */}
        <Banners navigation={navigation} />
        {/* Chart */}
        <Charts navigation={navigation} />
        {/* Present */}
        <Present navigation={navigation} />
        {/* address */}
        <Address navigation={navigation} />
        {/* footer */}
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  // ================== heaeder =====================
  header: {
    marginTop: 0,
    height: 60,
  },
});
