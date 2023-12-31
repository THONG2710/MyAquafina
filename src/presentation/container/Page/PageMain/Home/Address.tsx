import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import {forModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import ButtonImg from '../../../../component/Button/ButtonImg';
import { marker, message, ripple, textRebirthStation } from '../../../../resource/images';

export interface AddressProps extends TextProps {
  addressStyle?: StyleProp<ViewStyle>;
  navigation: any;
}

const Address: React.FC<AddressProps> = props => {
  const {addressStyle, navigation} = props;
  return (
    <View style={[styles.container, addressStyle]}>
      {/* header */}
      <View style={styles.header}>
        <Text style={[styles.txt, styles.header_title1]}>BẢN ĐỒ XANH</Text>
        <Text style={[styles.txt, styles.header_title2]}>
          <Text style={styles.header_titleHighLight}>Địa điểm</Text> đặt
        </Text>
        <Image
          style={styles.header_img}
          source={{uri: textRebirthStation}}
        />
      </View>
      {/* body */}
      <View style={styles.body}>
        <View style={styles.body_itemAddress}>
          <ImageBackground
            style={styles.body_imgMess}
            source={{uri: message}}>
            <Text style={styles.body_titleAddress}>NHÀ THI ĐẤU QUÂN KHU 7</Text>
            <Text style={styles.body_address}>
              202 Hoàng Văn Thụ, P.9, Q.Phú Nhuận, TP.HCM
            </Text>
          </ImageBackground>
          <Image
            style={styles.body_imgRipple}
            tintColor={colors.WHITE}
            source={{uri: ripple}}
          />
          <Image
            style={styles.body_imgMarker}
            source={{uri: marker}}
          />
        </View>

        <View>
          <Image
            style={styles.body_imgRipple2}
            tintColor={colors.WHITE}
            source={{uri: ripple}}
          />
          <Image
            style={styles.body_imgMarker2}
            source={{uri: marker}}
          />
        </View>

        <View>
          <Image
            style={styles.body_imgRipple3}
            tintColor={colors.WHITE}
            source={{uri: ripple}}
          />
          <Image
            style={styles.body_imgMarker3}
            source={{uri: marker}}
          />
        </View>
        <View style={styles.body_btnContainer}>
          <ButtonImg
            btnStyle={styles.body_btn}
            text="Khám phá ngay"
            onPress={() => navigation.navigate('PureMap')}
          />
        </View>
      </View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 8,
    backgroundColor: colors.LIGHT_5_BLUE,
    zIndex: 100,
    overflow: 'hidden',
  },

  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  // ======================== header ========================
  header: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  header_title1: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  header_title2: {
    fontSize: 18,
  },

  header_titleHighLight: {
    fontWeight: 'bold',
  },

  header_img: {
    width: 110,
    height: 130,
    resizeMode: 'contain',
    zIndex: 1,
  },

  // ========================= body =================
  body: {
    width: '100%',
    flex: 1,
  },

  body_itemAddress: {
    width: '100%',
  },

  body_imgRipple: {
    position: 'absolute',
    width: 500,
    height: 500,
    resizeMode: 'contain',
    zIndex: -2,
    top: -60,
    left: -10,
  },

  body_imgMarker: {
    position: 'absolute',
    top: 90,
    right: 85,
    width: 70,
    height: 100,
    resizeMode: 'contain',
    zIndex: 1,
  },

  body_imgMess: {
    position: 'absolute',
    width: 217,
    height: 84,
    resizeMode: 'contain',
    top: 5,
    right: 10,
    padding: 10,
    zIndex: 2,
  },

  body_titleAddress: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontFamily: fonts.primaryFont,
    fontSize: 13,
  },

  body_address: {
    color: colors.LIGHT_10_BLUE,
    fontFamily: fonts.primaryFont,
    fontStyle: 'normal',
    fontSize: 12,
  },

  //   2
  body_imgRipple2: {
    position: 'absolute',
    width: 450,
    height: 450,
    resizeMode: 'contain',
    top: 100,
  },

  body_imgMarker2: {
    top: 240,
    left: 195,
    width: 60,
    height: 90,
    resizeMode: 'contain',
    zIndex: 0,
  },

  //   3
  body_imgRipple3: {
    position: 'absolute',
    width: 400,
    height: 400,
    resizeMode: 'contain',
    top: 70,
    left: -150,
    zIndex: -10,
  },

  body_imgMarker3: {
    top: 200,
    left: 20,
    width: 60,
    height: 70,
    resizeMode: 'contain',
    zIndex: -1,
  },

  body_btnContainer: {
    width: '100%',
    marginTop: 165,
    flex: 1,
    alignItems: 'center',
    zIndex: 10,
  },

  body_btn: {
    width: Dimensions.get('screen').width / 2 ,
  },
});
