import {Pressable, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';
import {Shadow} from 'react-native-shadow-2';

const PopupTimeUp = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.cuttingMask1}>
        <View style={[styles.cuttingMask2]}>
          <View style={[styles.cuttingMask3]}>
            <View style={styles.header}>
              <Image
                style={styles.imgCuttingMask}
                source={require('../../resource/images/cuttingMask.png')}
              />
              <Text style={styles.txtTram}>TRẠM</Text>
              <Text style={styles.txtTaiSinh}>TÁI SINH</Text>
              <Text style={styles.txtCuaAqua}>CỦA AQUAFINA</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.title}>CẢNH BÁO HẾT THỜI GIAN</Text>
      <Text style={styles.content}>
        Thời gian thực hiện quy trình đã kết thúc, bạn có cần thêm thời gian
        không?
      </Text>
      <Text style={styles.content}>
        Trở về màn hình chính sau:{' '}
        <Text style={[styles.content, styles.time]}>10 GIÂY NỮA</Text>
      </Text>
      {/* button container */}
      <View style={styles.buttonContainer}>
        <Shadow offset={[0, 5]} distance={5}>
          <Pressable style={styles.buton}>
            <Text style={styles.txtButton}>MÀN HÌNH CHÍNH</Text>
          </Pressable>
        </Shadow>
        <Shadow offset={[0, 5]} distance={5}>
          <Pressable style={[styles.buton, {backgroundColor: colors.LIGHT_2_BLUE}]}>
            <Text style={[styles.txtButton, {color: colors.WHITE}]}>THÊM THỜI GIAN</Text>
          </Pressable>
        </Shadow>
      </View>
    </View>
  );
};

export default PopupTimeUp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '47%',
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: colors.WHITE,
  },

  //  =========================== header =========================
  header: {
    width: Dimensions.get('screen').width/3,
    height: Dimensions.get('screen').width/3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    zIndex: 10,
  },

  txtTram: {
    fontFamily: fonts.primaryFont,
    fontSize: 24,
    color: colors.BLUE,
    fontWeight: 'bold',
  },

  txtTaiSinh: {
    fontFamily: fonts.primaryFont,
    fontSize: 16,
    color: colors.BLUE,
    fontWeight: 'bold',
    marginTop: -5,
  },

  txtCuaAqua: {
    fontFamily: fonts.primaryFont,
    fontSize: 9,
    color: colors.BLUE,
    fontWeight: 'bold',
    marginTop: -2,
  },

  imgCuttingMask: {
    position: 'absolute',
    width: 73,
    height: 75,
    resizeMode: 'contain',
    zIndex: 1,
    top: 9,
    left: 13,
  },

  cuttingMask1: {
    borderWidth: 10,
    borderRadius: 500,
    padding: 70,
    position: 'absolute',
    zIndex: -1,
    marginTop: -190,
    borderColor: colors.LIGHT_4_BLUE,
  },

  cuttingMask2: {
    borderWidth: 10,
    borderRadius: 200,
    padding: 60,
    borderColor: colors.LIGHT_4_BLUE,
  },

  cuttingMask3: {
    borderWidth: 10,
    borderRadius: 200,
    padding: 10,
    borderColor: colors.LIGHT_4_BLUE,
  },

  //  ================== title =================
  title: {
    marginTop: 100,
    width: '90%',
    textAlign: 'center',
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 20,
    fontWeight: 'bold',
  },

  content: {
    width: '90%',
    textAlign: 'center',
    fontFamily: fonts.primaryFont,
    color: colors.GRAY,
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  time: {
    fontWeight: 'bold',
    color: colors.RED,
    fontSize: 15,
  },

  //   ===================== button ====================
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '95%',
    marginTop: 25,
  },

  txtButton: {
    padding: 10,
    fontFamily: fonts.primaryFont,
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.BLUE,
  },

  buton: {
    borderRadius: 5,
    backgroundColor: colors.LIGHT_4_BLUE,
  }
});
