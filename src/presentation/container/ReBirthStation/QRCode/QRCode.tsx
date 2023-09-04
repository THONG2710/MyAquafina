import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../../resource/values/fonts';
import {colors} from '../../../resource/values/color';
import Modal from 'react-native-modal';
import PopupThanks from '../../../component/Popup/PopupThanks';
import Background from '../../../component/Background/Background';
import BackgroundWide from '../../../component/Background/BackgroundWide';
import CircleButton from '../../../component/Button/CircleButton';
import {nativeViewGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import {QRCodeProp} from './type';
import PopupErrorMessage from '../../../component/Popup/PopupErrorMessage';
import { QRCodeBig, cuttingMask, iconBack, logoAquafina } from '../../../resource/images';

const QRCode: React.FC<QRCodeProp> = props => {
  const {navigation} = props;
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <PopupThanks onPress={toggleModal} />
      </Modal>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.header_imgLogo}
          source={{uri: logoAquafina}}
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
        <View
          style={{
            width: '50%',
            height: '100%',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            right: 0,
          }}>
          <Background />
          <Text style={[styles.textStyle, styles.pointFrame_txtScore]}>10</Text>
        </View>
      </View>

      {/* body */}
      <View style={styles.body}>
        <Background backgroundStyle={{top: 10}} />
        {/* title container */}
        <View style={styles.body_titleContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={styles.body_btnBack}
              source={{uri: iconBack}}
            />
          </Pressable>
          <View style={styles.body_NameView}>
            <Text style={[styles.textStyle, styles.body_txtLine1]}>TRẠM</Text>
            <Image
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                top: -10,
                left: -5,
              }}
              source={{uri: cuttingMask}}
            />
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
            source={{uri: QRCodeBig}}
          />
          <Text style={styles.body_txtNotice}>
            Thời gian quét QR còn:{' '}
            <Text style={styles.body_txtEndTime}>30 GIÂY NỮA</Text>
          </Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <CircleButton title={'XÁC NHẬN'} onPress={toggleModal} />
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
    marginRight: 10,
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
    fontSize: 17,
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
    justifyContent: 'center',
  },

  footer_modal: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
