import {Dimensions, Image, StyleSheet, Text, TextProps, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../resource/values/color';
import { fonts } from '../../resource/values/fonts';
import { useAppSelector } from '../../shared-state/Redux/Hook/Hook';

export interface ItemMyRankProp extends TextProps {
  user: {id: string, name: string, phoneNumber: string, avatar: string, scores: number}
} 

const ItemMyRank:React.FC<ItemMyRankProp> = (props) => { 
  const {user} = props;
  const myPlace = useAppSelector(state => state.authentication.myPlace)
  return (
    <View style={styles.container}>
      <View style={styles.left_box}>
        <Text style={[styles.text, {paddingHorizontal: 10, fontSize: 14,}]}>#{myPlace}</Text>
        <View style={styles.infoBox}>
          <Image style={styles.avatar} source={{uri: user.avatar}}/>
          <Text style={styles.text}>{user.name}</Text>
        </View>
      </View>
      <Text style={[styles.text, {marginHorizontal: 10, fontSize: 14}]}>{user.scores}</Text>
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
    fontSize: 10,
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
    borderRadius: 40,
  }

});
