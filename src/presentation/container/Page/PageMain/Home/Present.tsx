import {Dimensions, Image, StyleSheet, TextProps, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Text} from 'react-native';
import ButtonImg from '../../../../component/Button/ButtonImg';
import {fonts} from '../../../../resource/values/fonts';
import {colors} from '../../../../resource/values/color';
import ItemSlideGift from '../../../../component/Item/ItemSlideGift';
import Custom from './Custom';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

export interface PresentProp extends TextProps {
  navigation?: any;
}

const data = [
  {
    image: require('../../../../resource/images/shirt.png'),
  },
  {
    image: require('../../../../resource/images/hat.png'),
  },
  {
    image: require('../../../../resource/images/sock.png'),
  },
  {
    image: require('../../../../resource/images/tShirt_w.png'),
  },
  {
    image: require('../../../../resource/images/tShirt_b.png'),
  },
];

const Present: React.FC<PresentProp> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.txt, styles.header_title]}>QUÀ TẶNG XANH</Text>
        <Text style={[styles.txt, styles.header_title2]}>PHỤ KIỆN</Text>
        <Image
          style={styles.header_xanh}
          source={require('../../../../resource/images/xanh.png')}
        />
        <Text style={[styles.txt]}>
          Tự tin{' '}
          <Text style={[styles.txt, styles.header_highLight]}>Sải bước</Text>
        </Text>
        <Text style={[styles.txt, styles.header_txtSource]}>
          QUÀ TẶNG ĐƯỢC LÀM TỪ VẢI TÁI CHẾ CỦA AQUAFINA
        </Text>
      </View>
      {/* slides */}
      <View style={styles.slides}>
        <Image tintColor={colors.LIGHT_11_BLUE} style={styles.slides_imgRipple} source={require('../../../../resource/images/ripple.png')}/>
        <Custom data={data} />
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <ButtonImg btnStyle={styles.footer_btn} text="Khám phá ngay" onPress={() => navigation.navigate('PureGift')}/>
      </View>
    </View>
  );
};

export default Present;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:  Dimensions.get('screen').height/10*7.5,
    backgroundColor: colors.WHITE,
  },


  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  // header
  header: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },

  header_title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  header_title2: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  header_xanh: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginTop: -30,
    zIndex: -1,
  },

  header_highLight: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  header_txtSource: {
    fontSize: 16,
    textAlign: 'center',
    width: '75%',
    marginTop: 10,
    fontWeight: 'bold',
  },

  // ================ slides =================================
  slides: {
    width: '100%',
    height: '45%',
    marginTop: 50,
  },

  slides_imgRipple: {
    position: 'absolute',
    width: 520,
    height: 520,
    resizeMode: 'contain',
    top: -120,
    left: -75,
  },

  // ================= footer ============================
  footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },

  footer_btn: {
    width: Dimensions.get('screen').width/2,
  },
});
