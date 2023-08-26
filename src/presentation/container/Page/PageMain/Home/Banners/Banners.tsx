import {Dimensions, StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Present from '../Present';
import Address from '../Address';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Banner4 from './Banner4';

export interface BannersProp extends TextProps {
  navigation: any;
}

const Banners:React.FC<BannersProp> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Swiper
        autoplayTimeout={5}
        autoplay={true}
        height={(Dimensions.get('screen').height / 10) * 7.5}>
        <Banner1 navigation={navigation}/>
        <Banner2 navigation={navigation}/>
        <Banner3 navigation={navigation}/>
        <Banner4 navigation={navigation}/>
      </Swiper>
    </View>
  );
};

export default Banners;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 7.5,
  },
});
