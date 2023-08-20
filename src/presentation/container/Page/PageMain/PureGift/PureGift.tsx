import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import Custom from '../Home/Custom';
import { colors } from '../../../../resource/values/color';
import { fonts } from '../../../../resource/values/fonts';

const data = [
  {
    image: require('../../../../resource/images/shirt.png'),
  },
  {
    image: require('../../../../resource/images/hat.png'),
  },
  {
    image: require('../../../../resource/images/sock.png'),
  },
  {
    image: require('../../../../resource/images/tShirt_w.png'),
  },
  {
    image: require('../../../../resource/images/tShirt_b.png'),
  },
];

const PureGift = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent headerStyle={{marginTop: 0, marginBottom: 0}} />
      {/* gift */}
      <View style={styles.gift}>
        <Text style={styles.gift_text}>Quà Tặng Xanh</Text>
        <Custom data={data} />
        <Image style={styles.gift_bg} source={require('../../../../resource/images/bg.png')}/>
      </View>
    </View>
  );
};

export default PureGift;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  gift: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  gift_text: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  gift_bg: {
    position: 'absolute',
    zIndex: -1,
    top: 200,
    width: Dimensions.get('screen').width + 100,
    height: 200,
    resizeMode: 'contain',
  },
});
