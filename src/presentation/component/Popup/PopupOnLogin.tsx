import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../resource/values/color';
import ButtonImg from '../Button/ButtonImg';
import {fonts} from '../../resource/values/fonts';
import { useAppDispatch } from '../../shared-state/Redux/Hook/Hook';
import { ripple, x2 } from '../../resource/images';

export interface OnLoginProp extends TextProps {
  onPress?: () => void;
  onLogin?: () => void;
}

const PopupOnLogin: React.FC<OnLoginProp> = props => {
  const {onPress, onLogin} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.btn_cancle}
          tintColor={colors.BLACK}
          source={{uri: x2}}
        />
      </TouchableOpacity>
      <View style={styles.bodyView}>
        <Image
          tintColor={colors.LIGHT_4_BLUE}
          style={styles.body_imgBackground}
          source={{uri: ripple}}
        />
        <Text style={styles.body_textTitle}>
          Bạn hãy <Text style={styles.body_textHighlight}>đăng nhập</Text> để
          tiếp tục nhé!
        </Text>
        <ButtonImg btnStyle={styles.btn_login} text="Đăng nhập" onPress={onLogin}/>
      </View>
    </View>
  );
};

export default PopupOnLogin;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 2.5,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    overflow: 'hidden',
  },

  bodyView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: -1,
    justifyContent: 'space-evenly',
  },

  body_imgBackground: {
    position: 'absolute',
    top: -50,
  },

  body_textTitle: {
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    color: colors.BLUE,
    width: '60%',
    textAlign: 'center',
  },

  body_textHighlight: {
    fontWeight: 'bold',
  },

  btn_cancle: {
    position: 'absolute',
    width: 25,
    height: 25,
    resizeMode: 'contain',
    top: 10,
    right: 10,
  },

  btn_login: {
    width: Dimensions.get('screen').width - 100,
  },
});
