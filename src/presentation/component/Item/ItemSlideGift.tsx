import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';
import {iconBottle, iconTote, ripple, tote} from '../../resource/images';

export interface ItemSlideProps extends TextProps {
  styleMore?: StyleProp<ViewStyle>;
  textStyle?: string;
  item?: any;
  isActive?: boolean;
  isShowRiple?: 'flex' | 'none';
  onPress?: () => void;
}

const ItemSlideGift: React.FC<ItemSlideProps> = props => {
  const {styleMore, item, textStyle, isActive, isShowRiple, onPress} = props;

  return (
      <TouchableOpacity style={[styles.container, styleMore]} onPress={onPress}>
        <View
          style={{
            width: '100%',
            height: '50%',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'absolute',
          }}>
          <Image
            tintColor={colors.DARK_BLUE2}
            style={{position: 'absolute', display: isShowRiple, top: -100, width: 290, height: 290, resizeMode: 'contain'}}
            source={{uri: ripple}}
          />
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={isActive ? styles.imgActive : styles.img}
            source={{uri: item.image}}
          />
        </View>
        <View style={styles.infor}>
          <Text style={[styles.name, {color: textStyle}]}>
            {item.name}
          </Text>
        </View>
        <View style={styles.footer}>
          <Image
            tintColor={isActive ? textStyle : colors.GRAY}
            style={styles.icon}
            source={{uri: item.icon}}
          />
          <Text style={[styles.txtQuantity, {color: textStyle}]}> ~ {item.quantity} </Text>
          <Image
            tintColor={isActive ? textStyle : colors.GRAY}
            style={styles.iconBottle}
            source={{uri: iconBottle}}
          />
        </View>
      </TouchableOpacity>
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
    marginTop: 30,
  },

  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '60%',
  },

  img: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },

  imgActive: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginTop: -60,
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
  },
});
