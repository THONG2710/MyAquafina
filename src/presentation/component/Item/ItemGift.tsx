import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';

const ItemGift = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContaier}>
        <Image
          tintColor={colors.BLUE}
          style={styles.backgroundImg}
          source={require('../../resource/images/ripple.png')}
        />
        <Image
          style={styles.imgGift}
          source={require('../../resource/images/shirt.png')}
        />
      </View>
      <Text style={styles.titleName}>Áo khoác cape Aquafina x Headless</Text>
      <Text style={styles.txtContent}>
        Số lượng quà tặng mỗi tuần: 6 Cách thức đổi quà: Trao cho 6 người có
        điểm Aquaffina cao nhất Giá trị quà tặng (+VAT): 1.200.000 đồng/ áo
        khoác
      </Text>
    </View>
  );
};

export default ItemGift;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 - 26,
    backgroundColor: colors.WHITE,
    height: Dimensions.get('screen').width,
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 20,
  },

  imgContaier: {
    width: '100%',
    height: '40%',
    backgroundColor: colors.LIGHT_2_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },

  backgroundImg: {
    position: 'absolute',
    width: Dimensions.get('screen').width / 2 + 60,
    height: Dimensions.get('screen').width / 2 + 60,
    resizeMode: 'contain',
    top: -90,
  },

  imgGift: {
    width: '80%',
    height: '90%',
    resizeMode: 'contain',
  },

  titleName: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.GRAY,
    marginTop: 10,
    marginBottom: 5,
  },

  txtContent: {
    fontFamily: fonts.primaryFont,
    fontSize: 13,
    color: colors.GRAY,
  },
});
