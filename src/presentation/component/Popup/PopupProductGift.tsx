import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  bag,
  bag2,
  hat,
  ripple,
  shirt,
  shirt2,
  sock,
  tote,
  x,
  x2,
} from '../../resource/images';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';
import {TextProps} from 'react-native';

export interface PopupProductGiftProps extends TextProps {
  onPress: () => void;
  data: any;
}

const PopupProductGift: React.FC<PopupProductGiftProps> = props => {
  const {onPress, data} = props;

  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <View style={styles.btnContainer}>
          <Pressable onPress={onPress}>
            <Image style={styles.btn_cancle} source={{uri: x2}} />
          </Pressable>
        </View>
        <Text style={styles.title}>
          QUÀ TẶNG ĐƯỢC LÀM TỪ VẢI TÁI CHẾ CỦA AQUAFINA
        </Text>
        <Image
          tintColor={colors.LIGHT_4_BLUE}
          style={styles.imageBackground}
          source={{uri: ripple}}
        />
        <Image style={styles.imgageProduct} source={{uri: data.image}} />
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.cap}>1 Áo được làm từ {data.by} chai nhựa</Text>
      </View>
    </View>
  );
};

export default PopupProductGift;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '67%',
    alignItems: 'center',
  },

  smallContainer: {
    backgroundColor: colors.WHITE,
    width: '90%',
    height: '100%',
    alignItems: 'center',
    borderRadius: 15,
  },

  btnContainer: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 30,
  },

  btn_cancle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  title: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.BLUE,
    textAlign: 'center',
    width: '67%',
  },

  imgageProduct: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'contain',
  },

  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },

  name: {
    fontFamily: fonts.primaryFont,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLUE,
    textAlign: 'center',
    width: '67%',
    marginBottom: 10,
  },

  cap: {
    fontFamily: fonts.primaryFont,
    fontSize: 13,
    color: colors.BLUE,
    textAlign: 'center',
    width: '100%',
  },
});
