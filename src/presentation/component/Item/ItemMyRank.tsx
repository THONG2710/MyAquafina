import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors } from '../../resource/values/color';
import { fonts } from '../../resource/values/fonts';

const ItemMyRank = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left_box}>
        <Text style={[styles.text, {paddingHorizontal: 10,}]}>#100</Text>
        <View style={styles.infoBox}>
          <Image style={styles.avatar} source={require('../../resource/images/avatar.png')} />
          <Text style={styles.text}>John Wick</Text>
        </View>
      </View>
      <Text style={[styles.text, {marginHorizontal: 10,}]}>200</Text>
    </View>
  );
};

export default ItemMyRank;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 80,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
  },

  text: {
    fontFamily: fonts.primaryFont,
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.WHITE,
  },

  left_box: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 5,
  }

});
