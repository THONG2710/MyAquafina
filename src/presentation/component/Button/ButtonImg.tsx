import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextProps,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {fonts} from '../../resource/values/fonts';
import {colors} from '../../resource/values/color';
import {Shadow} from 'react-native-shadow-2';

export interface ButtonImgProps extends TextProps {
  text?: string;
  isButtonLight?: boolean;
  btnStyle?: StyleProp<ViewStyle>;
}

const ButtonImg: React.FC<ButtonImgProps> = props => {
  const {text, isButtonLight, btnStyle} = props;

  const ChooseButton = () => {
    if (isButtonLight) {
      return (
        <ImageBackground
          style={{
            width: Dimensions.get('screen').width,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          resizeMode='repeat'
          source={require('../../resource/images/imgBackgroundLight.png')}>
          <Text style={[styles.txtButton, {color: colors.BLUE}]}>{text}</Text>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          style={{
            width: Dimensions.get('screen').width,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          resizeMode='repeat'
          source={require('../../resource/images/imgBackground.png')}>
          <Text style={styles.txtButton}>{text}</Text>
        </ImageBackground>
      );
    }
  };

  return (
    <Shadow style={[styles.container, btnStyle]} offset={[0, 5]} distance={5}>
      <TouchableOpacity >
        {ChooseButton()}
      </TouchableOpacity>
    </Shadow>
  );
};

export default ButtonImg;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 32,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    overflow: 'hidden',
  },

  txtButton: {
    fontFamily: fonts.primaryFont,
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
