import {
  Dimensions,
  Image,
  ImageBase,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ButtonImg from '../../../../component/Button/ButtonImg';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';

const Instroduce = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background1}
        source={require('../../../../resource/images/rippleRing3.png')}
      />
      <Image
        style={styles.background2}
        source={require('../../../../resource/images/rippleRing.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>THỂ LỆ{'\n'}CHƯƠNG TRÌNH</Text>
        <Text style={styles.txtTitle2}>NHẬN QUÀ{'\n'}SỐNG</Text>
        <Image
          style={styles.imgXanh}
          source={require('../../../../resource/images/xanh.png')}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imgShirt}
          source={require('../../../../resource/images/shirt2.png')}
        />
        <Image
          style={styles.imgBag}
          source={require('../../../../resource/images/bag2.png')}
        />
      </View>
      <View style={styles.footer}>
        <ButtonImg btnStyle={styles.btn} text="Tìm hiểu thêm" />
      </View>

      {/* contact */}
      <View style={styles.contactContainer}>
        <Text style={styles.contact_title}>Thương hiệu kết hợp</Text>
        <View style={styles.brandContainer}>
          <Image style={styles.brandImg} source={require('../../../../resource/images/brand1.png')} />
          <Image style={styles.brandImg} source={require('../../../../resource/images/brand2.png')} />
        </View>
      </View>
    </View>
  );
};

export default Instroduce;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 60,
    flex: 1,
  },

  titleContainer: {
    width: '100%',
    marginTop: 30,
    paddingLeft: 40,
    height: '10%',
  },

  txtTitle: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 22,
    fontWeight: 'bold',
  },

  txtTitle2: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 26,
    fontWeight: 'bold',
  },

  imgXanh: {
    position: 'absolute',
    width: '40%',
    height: 60,
    resizeMode: 'contain',
    top: 77,
    left: 130,
  },

  imgContainer: {
    width: Dimensions.get('screen').width - 100,
    marginLeft: 40,
    flexDirection: 'row',
    height: Dimensions.get('screen').height/2 + 70,
  },

  imgShirt: {
    width: Dimensions.get('screen').width / 2 + 20,
    height: '70%',
    resizeMode: 'contain',
    marginTop: 50,
  },

  imgBag: {
    width: Dimensions.get('screen').width / 2,
    height: '50%',
    resizeMode: 'contain',
    marginTop: 200,
    marginLeft: -80,
  },

  background1: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    top: 70,
    right: -70,
  },

  background2: {
    position: 'absolute',
    width: '40%',
    height: '50%',
    resizeMode: 'contain',
    top: 270,
    left: -50,
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: -60,
    height: '10%',
  },

  btn: {
    width: Dimensions.get('screen').width / 3 + 20,
  },

  // ==================== contact =================
  contactContainer: {
    width: '100%',
    height: Dimensions.get('screen').height/4,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: colors.LIGHT_6_BLUE,
  },

  contact_title: {
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLUE,
    marginTop: 10,
    marginBottom: 30,
  },

  brandContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  brandImg: {
    width: Dimensions.get('screen').width/3,
    height: 100,
    resizeMode: 'contain',
  },
});
