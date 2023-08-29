import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../../resource/values/color';
import { fonts } from '../../resource/values/fonts';

export interface TextFeildDarkProp extends TextProps {
  value?: string;
  textFieldStyle?: StyleProp<ViewStyle>;
  title?: string; 
}

const TextFeildDark: React.FC<TextFeildDarkProp> = props => {
  const {value, textFieldStyle, title} = props;
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
      <TextInput style={[styles.textField, textFieldStyle]} value={value} />
    </View>
  );
};

export default TextFeildDark;

const styles = StyleSheet.create({
  textField: {
    backgroundColor: colors.GRAY3,
    width: '100%',
    height: 50,
    borderRadius: 7,
    paddingHorizontal: 15,
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    color: colors.GRAY2,
  },

  textTitle: {
    fontFamily: fonts.primaryFont,
    fontSize: 15,
    color: colors.BLACK,
    marginBottom: 7,
  }
});
