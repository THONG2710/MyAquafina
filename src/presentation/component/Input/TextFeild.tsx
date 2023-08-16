import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../resource/values/color'
import { TextProps } from 'react-native-svg/lib/typescript/lib/extract/extractText'

export interface TextFeildProps extends TextProps {
    placeholder?: string;
    inputViewStyle?: StyleProp<ViewStyle>;
    numberOfLines?: number;
    multiline?: boolean;
    textStyle?: StyleProp<TextStyle>;
} 

const TextFeild: React.FC<TextFeildProps> = (props) => {
    const { placeholder, inputViewStyle, multiline,  numberOfLines, textStyle} = props;
  return (
    <View style={[styles.container, inputViewStyle]}>
      <TextInput multiline={multiline} numberOfLines={numberOfLines} style={[styles.text,textStyle]} placeholder={placeholder} placeholderTextColor={colors.GRAY2}/>
    </View>
  )
}

export default TextFeild

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.LIGHT_BLUE,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },

    text: {
        color: colors.GRAY,
    }
})