import {Dimensions, Image, StyleProp, StyleSheet, Text, TextProps, TextStyle, View} from 'react-native';
import React from 'react';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';

export interface ItemSlideProps extends TextProps {
    styleMore?: StyleProp<TextStyle>
}

const ItemSlideGift: React.FC<ItemSlideProps> = (props) => {
    const {styleMore} = props;
  return (
    <View style={[styles.container, styleMore]}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../resource/images/tote.png')}
        />
      </View>
      <View style={styles.infor}>
        <Text style={styles.name}>Túi tote {'\n'} Aqufina x Repeet</Text>
      </View>
      <View style={styles.footer}>
        <Image tintColor={colors.GRAY} style={styles.icon} source={require('../../resource/images/iconTote.png')} />
        <Text style={styles.txtQuantity}> ~ 2  </Text>
        <Image tintColor={colors.GRAY} style={styles.iconBottle} source={require('../../resource/images/iconBottle.png')} />
      </View>
    </View>
  );
};

export default ItemSlideGift;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 2 + 60,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    aspectRatio: 1,
  },

  imgContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },

  infor: {
    width: '90%',
    alignItems: 'center',
  },

  name: {
    color: colors.GRAY,
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    textAlign: 'center',
  },

  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 7,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  iconBottle: {
    width: 10,
    height: 25,
    resizeMode: 'contain',
  },

  txtQuantity: {
    color: colors.GRAY,
  }
});
