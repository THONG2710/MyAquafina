import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native';
import React from 'react';
import ButtonImg from '../../../../../component/Button/ButtonImg';
import {fonts} from '../../../../../resource/values/fonts';
import {colors} from '../../../../../resource/values/color';
import { BannersProp } from './Banners';

const Banner2: React.FC<BannersProp> = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lan tỏa phong cách</Text>
      <Image
        style={styles.imgTitle}
        source={require('../../../../../resource/images/xanh.png')}
      />
      <Image
        style={styles.video}
        source={require('../../../../../resource/images/video.png')}
      />
      <Image
        style={styles.imgBackground}
        source={require('../../../../../resource/images/rippleRing3.png')}
      />
      <Text style={styles.text}>
        CÙNG <Text style={styles.textHighLight}>AQUAFINA</Text>
      </Text>
      <View style={styles.btnContainer}>
        <ButtonImg btnStyle={styles.btnMore} text="Tìm hiểu thêm" onPress={() => navigation.navigate('PureWorld')}/>
      </View>
    </View>
  );
};

export default Banner2;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 7.5,
    backgroundColor: colors.LIGHT_5_BLUE,
  },

  title: {
    fontFamily: fonts.primaryFont,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.BLUE,
    marginTop: 40,
  },

  imgTitle: {
    width: 220,
    height: 50,
    resizeMode: 'contain',
    marginTop: -10,
  },

  imgBackground: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  video: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'cover',
    marginTop: 20,
  },

  text: {
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    color: colors.BLUE,
  },

  textHighLight: {
    fontWeight: 'bold',
  },

  btnContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginTop: 85,
  },

  btnMore: {
    width: Dimensions.get('screen').width / 2,
  },
});
