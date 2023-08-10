import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '../../../resource/values/color';
import { fonts } from '../../../resource/values/fonts';
import { ScreenProp } from './type';

const Start = ({navigation}: ScreenProp) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.header_imgLogo}
          source={require('../../../resource/images/logoAquafina.png')}
        />
        <Text style={[styles.textStyle, styles.header_title]}>
          HÃY CHO CHAI RỖNG VÀO MÁY
        </Text>
      </View>

      {/* body */}
      <View style={styles.body}>
        <View style={styles.body_navigationView}>
          <Pressable>
            <Text style={[styles.textStyle, styles.body_txtBack]}>
              Xem lại hướng dẫn
            </Text>
          </Pressable>
          <View style={styles.body_NameView}>
            <Text style={[styles.textStyle, styles.body_txtLine1]}>TRẠM</Text>
            <Text style={[styles.textStyle, styles.body_txtLine2]}>
              TÁI SINH
            </Text>
            <Text style={[styles.textStyle, styles.body_txtLine3]}>
              CỦA AQUAFINA
            </Text>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgMain}
            source={require('../../../resource/images/frame1.png')}
          />
        </View>
        <View style={styles.body_contentContainer}>
          <Text style={styles.body_txtContent}>
            Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái{' '}
          </Text>
          <Text style={styles.body_txtNotice}>
            Tự động kết thúc sau:{' '}
            <Text style={styles.body_txtEndTime}>30 GIÂY NỮA</Text>
          </Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Loading')}>
          <Image
            style={styles.footer_btnEnd}
            source={require('../../../resource/images/btnEnd.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.LIGHT_BLUE,
  },

  textStyle: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  // header
  header: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
  },

  header_imgLogo: {
    width: Dimensions.get('screen').width / 3,
    height: 30,
    resizeMode: 'contain',
    marginVertical: 20,
  },

  header_title: {
    fontWeight: '900',
    fontSize: 18,
  },

  //   body
  body: {
    width: Dimensions.get('screen').width - 32,
    marginLeft: 16,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    height: '60%',
    alignItems: 'center',
    paddingBottom: 30,
  },

  body_navigationView: {
    flexDirection: 'row',
    width: '92%',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  body_txtBack: {
    borderBottomWidth: 0.5,
    borderColor: colors.BLUE,
    marginTop: 3,
    fontFamily: fonts.primaryFont,
    fontSize: 14,
  },

  body_NameView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -2,
  },

  body_txtLine1: {
    fontWeight: '700',
    fontSize: 16,
  },

  body_txtLine2: {
    fontWeight: '700',
    fontSize: 11,
    marginTop: -5,
  },

  body_txtLine3: {
    fontWeight: '700',
    fontSize: 6,
    marginTop: -3,
  },

  imgContainer: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgMain: {
    width: '97%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 20,
  },

  //   content
  body_contentContainer: {
    width: '100%',
    alignItems: 'center',
  },

  body_txtContent: {
    fontFamily: fonts.primaryFont,
    color: colors.GRAY,
    textAlign: 'center',
    width: '80%',
    fontSize: 14,
  },

  body_txtNotice: {
    fontFamily: fonts.primaryFont,
    color: colors.GRAY,
    fontSize: 13,
    marginTop: 10,
  },

  body_txtEndTime: {
    color: colors.RED,
    fontWeight: 'bold',
    fontFamily: fonts.primaryFont,
    fontSize: 14,
  },

  // footer
  footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },

  footer_btnEnd: {
    width: Dimensions.get('screen').width / 3,
    height: 150,
    resizeMode: 'contain',
  },
});