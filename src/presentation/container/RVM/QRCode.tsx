import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../../resource/values/fonts';
import {colors} from '../../resource/values/color';

const QRCode = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.header_imgLogo}
          source={require('../../resource/images/logoAquafina.png')}
        />
        <Text style={[styles.textStyle, styles.header_title]}>
          TRẠM TÁI SINH CỦA AQUAFINA
        </Text>
      </View>

      {/* point frame */}
      <View style={styles.pointFrame}>
        <Text style={[styles.textStyle, styles.pointFrame_txtNote]}>
          Điểm quy đổi:
        </Text>
        <Text style={[styles.textStyle, styles.pointFrame_txtScore]}>10</Text>
      </View>

      {/* body */}
      <View style={styles.body}>
        {/* title container */}
        <View style={styles.body_titleContainer}>
          <Image
            style={styles.body_btnBack}
            source={require('../../resource/images/iconBack.png')}
          />
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

        {/* content container */}
        <View style={styles.body_contentContainer}>
          <Text style={styles.body_textContent}>
            Quét mã QR code để {'\n'} truy cập vào trang chủ{'\n'}
            <Text style={styles.textStyle}>Aquafina.pepsishop.com</Text> {'\n'}{' '}
            và tích điểm đổi quà!
          </Text>
          <Image
            style={styles.body_imgQRcode}
            source={require('../../resource/images/QRCodeBig.png')}
          />
          <Text style={styles.body_txtNotice}>
            Thời gian quét QR còn:{' '}
            <Text style={styles.body_txtEndTime}>30 GIÂY NỮA</Text>
          </Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image style={styles.footer_btnConfirm} source={require('../../resource/images/btnConfirm.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRCode;

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

  // ======================== HEADER ========================
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

  // ========================= POINT FRAME ============================
  pointFrame: {
    width: Dimensions.get('screen').width - 32,
    height: '12%',
    marginLeft: 16,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  pointFrame_txtNote: {
    marginLeft: 20,
    fontWeight: '600',
  },

  pointFrame_txtScore: {
    fontSize: 42,
    fontWeight: '700',
    marginRight: 40,
  },

  // ================= BODY =============================
  body: {
    width: Dimensions.get('screen').width - 32,
    height: '48%',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    marginHorizontal: 16,
    alignItems: 'center',
  },

  // ========================== TITLE CONTAINER ========================
  body_titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    marginTop: 5,
  },

  body_btnBack: {
    width: 30,
    height: 30,
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

  // ======================= CONTENT CONTAINER ====================
  body_contentContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: -10,
  },

  body_textContent: {
    color: colors.GRAY,
    fontSize: 13,
    fontFamily: fonts.primaryFont,
    width: '65%',
    textAlign: 'center',
  },

  body_imgQRcode: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    marginVertical: 10,
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

  // ============================= FOOTER =============================
  footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },

  footer_btnConfirm: {
    width: Dimensions.get('screen').width / 3,
    height: 150,
    resizeMode: 'contain',
  },
});
