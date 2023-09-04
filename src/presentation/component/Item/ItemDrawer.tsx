import {Image, StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';
import { fonts } from '../../resource/values/fonts';
import { colors } from '../../resource/values/color';

export interface ItemDrawerProps extends TextProps {
  icon?: string;
  label: string;
  isFocused: boolean;
}

const ItemDrawer: React.FC<ItemDrawerProps> = props => {
  const {icon, label, isFocused} = props;
  return (
    <View style={styles.container}>
      <Image tintColor={isFocused?colors.BLUE:colors.GRAY} style={styles.icon} source={{uri: icon}} />
      <Text style={[styles.label, {color: isFocused?colors.BLUE:colors.GRAY}]}>{label}</Text>
    </View>
  );
};

export default ItemDrawer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginRight: 10,
    },

    label: {
        fontFamily: fonts.primaryFont,
        fontSize: 16,
        fontWeight: 'bold',
    }
});
