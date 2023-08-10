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

const Loading = ({navigation}: ScreenProp) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.header_imgLogo}
          source={require('../../../resource/images/logoAquafina.png')}
        />
        <Text style={[styles.textStyle, styles.header_title]}>
          CHAI NHỰA ĐANG ĐƯỢC XỬ LÝ...
        </Text>
      </View>

      {/* body */}
      <View style={styles.body}>
        <View style={styles.body_navigation}>
          <Image
            style={styles.body_btnBack}
            source={require('../../../resource/images/iconBack.png')}
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
        <View style={styles.mainContainer}>
          <View style={styles.body_outLine}>
            <View style={styles.body_inLine}>
              <Text style={styles.body_textInLine}>30</Text>
              <Text style={styles.body_textPoint}>ĐIỂM</Text>
            </View>
          </View>
        </View>
        <View style={styles.body_contentContainer}>
          {/* infor */}
          <View style={styles.body_infor}>
            <View style={styles.body_detailInfor}>
              <View style={styles.body_imgDetailContainer}>
                <Image
                  style={styles.body_imgDetail}
                  source={require('../../../resource/images/bottle.png')}
                />
              </View>
              <View style={styles.body_inforContainer}>
                <Text style={styles.body_infoTxtLine1}>AQUAFINA</Text>
                <Text style={styles.body_infoTxtLine2}>1</Text>
                <Text style={styles.body_infoTxtLine3}>chai</Text>
              </View>
            </View>

            <View style={styles.body_detailInfor}>
              <View style={styles.body_imgDetailContainer}>
                <Image
                  style={styles.body_imgDetail}
                  source={require('../../../resource/images/bottleOther.png')}
                />
              </View>
              <View style={styles.body_inforContainer}>
                <Text style={styles.body_infoTxtLine1}>CHAI KHÁC</Text>
                <Text style={styles.body_infoTxtLine2}>4</Text>
                <Text style={styles.body_infoTxtLine3}>chai</Text>
              </View>
            </View>
          </View>
          <Text style={styles.body_txtNotice}>
            Tự động kết thúc sau:{' '}
            <Text style={styles.body_txtEndTime}>30 GIÂY NỮA</Text>
          </Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('QRCode')}>
          <Image
            style={styles.footer_btnEnd}
            source={require('../../../resource/images/btnComplete.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loading;

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

  body_navigation: {
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

  mainContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body_outLine: {
    width: Dimensions.get('screen').width / 2 - 20,
    height: Dimensions.get('screen').width / 2 - 20,
    borderRadius: 200,
    backgroundColor: colors.LIGHT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body_inLine: {
    shadowColor: colors.BLUE,
    width: Dimensions.get('screen').width / 2 - 50,
    height: Dimensions.get('screen').width / 2 - 50,
    borderRadius: 200,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 20,
  },

  body_textInLine: {
    fontFamily: fonts.primaryFont,
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.BLUE,
    marginTop: -7,
  },

  body_textPoint: {
    fontFamily: fonts.primaryFont,
    fontSize: 19,
    color: colors.LIGHT_3_BLUE,
    marginTop: -7,
  },

  //   content
  body_contentContainer: {
    width: '100%',
    alignItems: 'center',
  },

  // infor
  body_infor: {
    flexDirection: 'row',
    width: '100%',
    height: '43%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  body_detailInfor: {
    flexDirection: 'row',
    width: '48%',
    height: '80%',
    borderWidth: 1,
    borderColor: colors.LIGHT_BLUE,
    borderRadius: 10,
    alignItems: 'center',
  },

  body_imgDetailContainer: {
    width: Dimensions.get('screen').width / 7 + 10,
    height: Dimensions.get('screen').width / 7 + 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.LIGHT_BLUE,
    borderRadius: 10,
  },        

  body_imgDetail: {
    width: 50,
    height: '85%',
    resizeMode: 'contain',
  },

  body_inforContainer: {
    alignItems: 'center',
  },

  body_infoTxtLine1: {
    color: colors.LIGHT_2_BLUE,
    fontFamily: fonts.primaryFont,
    fontWeight: '700',
    fontSize: 12,
  },

  body_infoTxtLine2: {
    color: colors.RED,
    fontFamily: fonts.primaryFont,
    fontWeight: '700',
    fontSize: 24,
    margin: -7,
  },

  body_infoTxtLine3: {
    color: colors.LIGHT_2_BLUE,
    fontFamily: fonts.primaryFont,
    fontWeight: '700',
    fontSize: 12,
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
