import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native';
import React from 'react';
import ButtonImg from '../Button/ButtonImg';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';
import { ripple } from '../../resource/images';


export interface ModalConfrimLogoutProp extends TextProps {
  onPress?: () => void;
  onPressLogout?: () => void;
}

const PopupConfirmLogout: React.FC<ModalConfrimLogoutProp> = props => {
  const {onPress, onPressLogout} = props;
  return (
    <View style={styles.container}>
      <Image
        tintColor={colors.LIGHT_4_BLUE}
        style={styles.imgBackground}
        source={{uri: ripple}}
      />
      <Text style={styles.textTitle}>Bạn có muốn đăng xuất hay không?</Text>
      <View style={styles.buttonView}>
        <ButtonImg
          btnStyle={styles.btnStyle}
          isButtonLight={true}
          text="Hủy"
          onPress={onPress}
        />
        <ButtonImg btnStyle={styles.btnStyle} text="Đăng xuất" onPress={onPressLogout}/>
      </View>
    </View>
  );
};

export default PopupConfirmLogout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 2.5,
    overflow: 'hidden',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  textTitle: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  buttonView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  btnStyle: {
    width: Dimensions.get('screen').width / 3,
  },

  imgBackground: {
    position: 'absolute',
    top: -50,
  },
});
