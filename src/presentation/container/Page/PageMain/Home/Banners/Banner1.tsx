import {Dimensions, Image, StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../../resource/values/color';
import {fonts} from '../../../../../resource/values/fonts';
import ButtonImg from '../../../../../component/Button/ButtonImg';
import { BannersProp } from './Banners';

const Banner1:React.FC<BannersProp> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.Banner}>
      {/* Backgroud */}
      <Image
        style={styles.rippleRingBackground}
        source={require('../../../../../resource/images/rippleRing.png')}
      />
      <Image
        style={styles.talentBackground}
        source={require('../../../../../resource/images/talent.png')}
      />
      {/* title */}
      <View style={styles.titleContainer}>
        <Text style={[styles.txt, styles.title_line1]}>
          Cùng <Text style={styles.title_hightLight}>Aquafina</Text> bước vào
        </Text>
        <View style={styles.title_childContainer}>
          <Text style={[styles.txt, styles.title_childText]}>THẾ GIỚI</Text>
          <Image
            style={styles.title_childImg}
            source={require('../../../../../resource/images/xanh.png')}
          />
        </View>
        <Text style={[styles.txt, styles.title_childText]}>THUẦN KHIẾT</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonImg btnStyle={styles.buttonMore} text="Tìm hiểu thêm" onPress={() => navigation.navigate('PureWorld')}/>
      </View>
    </View>
  );
};

export default Banner1;

const styles = StyleSheet.create({
  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  // ================== Banners =====================
  Banner: {
    width: '100%',
    height: Dimensions.get('screen').height/10*7.5,
    backgroundColor: colors.LIGHT_5_BLUE,
  },

  // ================== background =====================
  rippleRingBackground: {
    width: 430,
    height: 430,
    resizeMode: 'contain',
    position: 'absolute',
    left: -50,
    top: -10,
  },

  talentBackground: {
    width: 360,
    height: 430,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: -5,
  },

  // ================= title =====================
  titleContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 50,
  },

  title_line1: {
    fontSize: 20,
  },

  title_hightLight: {
    fontWeight: '700',
  },

  title_childContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: -15,
  },

  title_childText: {
    fontSize: 30,
    fontWeight: '900',
  },

  title_childImg: {
    width: 160,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 7,
  },

  buttonContainer: {
    width: '100%',
    marginTop: Dimensions.get('screen').height - 500,
    alignItems: 'center',
  },

  buttonMore: {
    width: Dimensions.get('screen').width / 2,
    marginBottom: 50,
  },
});
