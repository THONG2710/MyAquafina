import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../resource/values/color'
import { TextProps } from 'react-native-svg/lib/typescript/lib/extract/extractText'

export interface TextFeildProps extends TextProps {
    placeholder?: string;
    inputViewStyle?: StyleProp<ViewStyle>;
} 

const TextFeild: React.FC<TextFeildProps> = (props) => {
    const { placeholder, inputViewStyle } = props;
  return (
    <View style={[styles.container, inputViewStyle]}>
      <TextInput style={styles.text} placeholder={placeholder} placeholderTextColor={colors.GRAY2}/>
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
    },

    text: {
        color: colors.GRAY,
    }
})