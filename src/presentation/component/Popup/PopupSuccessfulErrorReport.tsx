import {StyleSheet, Text, View, Dimensions, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import Background from '../Background/Background';
import {colors} from '../../resource/values/color';
import { fonts } from '../../resource/values/fonts';
import { x } from '../../resource/images';

const PopupSuccessfulErrorReport = () => {
  return (
    <View style={styles.container}>
      <Background/>
      <Text style={styles.text}>BÁO LỖI THÀNH CÔNG!</Text>
      <TouchableOpacity>
        <Image style={styles.btnX} source={{uri: x}}/> 
      </TouchableOpacity>
    </View>
  );
};

export default PopupSuccessfulErrorReport;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },

  text: {
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: '900',
    color: colors.BLUE,
  },

  btnX: {
    position: 'absolute',
    top: 75,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 100,
    left: -25,
    backgroundColor: colors.WHITE,
  }
});
