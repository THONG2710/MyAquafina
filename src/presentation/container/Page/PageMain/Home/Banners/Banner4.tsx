import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../../resource/values/color';
import {fonts} from '../../../../../resource/values/fonts';
import ButtonImg from '../../../../../component/Button/ButtonImg';
import { BannersProp } from './Banners';
import { bag2, rippleRing, rippleRing3, shirt2, xanh } from '../../../../../resource/images';

const Banner4:React.FC<BannersProp> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.background1}
        source={{uri: rippleRing3}}
      />
      <Image
        style={styles.background2}
        source={{uri: rippleRing}}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>THỂ LỆ{'\n'}CHƯƠNG TRÌNH</Text>
        <Text style={styles.txtTitle2}>NHẬN QUÀ{'\n'}SỐNG</Text>
        <Image
          style={styles.imgXanh}
          source={{uri: xanh}}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imgShirt}
          source={{uri: shirt2}}
        />
        <Image
          style={styles.imgBag}
          source={{uri: bag2}}
        />
      </View>
      <View style={styles.footer}>
        <ButtonImg btnStyle={styles.btn} text="Tìm hiểu thêm" onPress={() => navigation.navigate('ProgarmLures')}/>
      </View>
    </View>
  );
};

export default Banner4;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 7.5,
    backgroundColor: colors.LIGHT_5_BLUE,
    overflow: 'hidden',
  },

  titleContainer: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 40,
    height: '12%',
  },

  txtTitle: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 20,
    fontWeight: 'bold',
  },

  txtTitle2: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 24,
    fontWeight: 'bold',
  },

  imgXanh: {
    position: 'absolute',
    width: '40%',
    height: 60,
    resizeMode: 'contain',
    top: 67,
    left: 120,
  },

  imgContainer: {
    width: Dimensions.get('screen').width - 100,
    marginLeft: 40,
    flexDirection: 'row',
    height: Dimensions.get('screen').height / 2 + 70,
  },

  imgShirt: {
    width: Dimensions.get('screen').width / 2 + 10,
    height: '70%',
    resizeMode: 'contain',
    marginTop: 50,
  },

  imgBag: {
    width: Dimensions.get('screen').width / 2 - 30,
    height: '50%',
    resizeMode: 'contain',
    marginTop: 200,
    marginLeft: -80,
  },

  background1: {
    position: 'absolute',
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
    top: 70,
    right: -70,
  },

  background2: {
    position: 'absolute',
    width: '40%',
    height: '50%',
    resizeMode: 'contain',
    top: 320,
    left: -50,
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: -80,
    height: '10%',
  },

  btn: {
    width: Dimensions.get('screen').width / 2,
  },
});
