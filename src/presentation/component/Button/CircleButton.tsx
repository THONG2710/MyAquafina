import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TextProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';

export interface CircleButtonProps extends TextProps {
  CircleButtonStyle?: StyleProp<ViewStyle>;
  title?: String; 
  onPress?: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = (props) => {
  const {onPress, CircleButtonStyle, title} = props;
  return (
      <TouchableOpacity style={[styles.container, CircleButtonStyle]} onPress={onPress}>
        <ImageBackground
          source={require('../../resource/images/arrowBlue.png')}
          style={styles.image}>
          <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 3,
    height: Dimensions.get('screen').width / 3,
    borderRadius: 100,
    borderColor: colors.BLUE,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: Dimensions.get('screen').width / 3 + 5,
    height: Dimensions.get('screen').width / 3 + 5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view: {
    width: '65%',
    height: '65%',
    borderRadius: 100,
    backgroundColor: colors.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: fonts.primaryFont,
    fontSize: 16,
    fontWeight: '900',
    color: colors.WHITE,
    textAlign: 'center',
  },
});
