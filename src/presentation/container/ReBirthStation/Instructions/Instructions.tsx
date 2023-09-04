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
import {colors} from '../../../resource/values/color';
import {fonts} from '../../../resource/values/fonts';
import Background from '../../../component/Background/Background';
import CircleButton from '../../../component/Button/CircleButton';
import {InstructionsProps} from './type';
import { cuttingMask, frame1, frame2, frame3, iconBack, logoAquafina } from '../../../resource/images';

const Instructions: React.FC<InstructionsProps> = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.header_imgLogo}
          source={{uri: logoAquafina}}
        />
        <Text style={[styles.textStyle, styles.header_title]}>
          HƯỚNG DẪN THAM GIA
        </Text>
      </View>
      {/* body */}
      <View style={styles.body}>
        <Background />
        <View style={styles.body_navigation}>
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
                top: -7,
                left: -6,
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
        {/* step1 */}
        <View style={styles.stepView}>
          <View style={styles.imgStepContainer}>
            <Image
              style={styles.stepImage}
              source={{uri: frame1}}
            />
          </View>
          <View style={styles.contentStepContainer}>
            <Text style={styles.titleStep}>Bước 1</Text>
            <Text style={styles.contentStep}>
              Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái và chờ hệ thống xử
              lý.
            </Text>
          </View>
        </View>

        {/* step2 */}
        <View style={styles.stepView}>
          <View style={styles.imgStepContainer}>
            <Image
              style={styles.stepImage}
              source={{uri: frame2}}
            />
          </View>
          <View style={styles.contentStepContainer}>
            <Text style={styles.titleStep}>Bước 2</Text>
            <Text style={styles.contentStep}>
              Hoàn tất toàn quá trình bỏ chai. Quét mã QR bằng điện thoại để dẫn
              về trang chủ:{' '}
              <Text style={[styles.textStyle, {color: colors.LIGHT_2_BLUE}]}>
                Aquafina.pepsishop.vn
              </Text>
            </Text>
          </View>
        </View>

        {/* step3 */}
        <View style={styles.stepView}>
          <View style={styles.imgStepContainer}>
            <Image
              style={styles.stepImage}
              source={{uri: frame3}}
            />
          </View>
          <View style={styles.contentStepContainer}>
            <Text style={styles.titleStep}>Bước 3</Text>
            <Text style={styles.contentStep}>
              Đăng nhập hoặc đăng ký để tích điểm vào tài khoản của bạn với cơ
              hội nhận được các phần quà giá trị từ Aquafina.
            </Text>
          </View>
        </View>

        {/* instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsText}>
            Nhấn “<Text style={styles.txtConfirm}>XÁC NHẬN</Text>” khi bạn đã
            đọc và hiểu cách thức tham gia
          </Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <CircleButton
          title={'XÁC NHẬN'}
          onPress={() => navigation.navigate('Start')}
        />
      </View>
    </View>
  );
};

export default Instructions;

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

  // body
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
    fontWeight: '900',
    fontSize: 17,
    width: '110%',
    height: '90%',
    position: 'absolute',
  },

  body_txtLine2: {
    fontWeight: '700',
    fontSize: 11,
    marginTop: 25,
  },

  body_txtLine3: {
    fontWeight: '700',
    fontSize: 6,
    marginTop: -3,
  },

  stepView: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.LIGHT_BLUE,
    flexDirection: 'row',
    width: '96%',
    height: '25%',
    marginTop: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  imgStepContainer: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stepImage: {
    width: 100,
    height: '100%',
    resizeMode: 'contain',
  },

  contentStepContainer: {
    flexDirection: 'column',
    width: '60%',
  },

  titleStep: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: '700',
    color: colors.DARK_BLUE,
    marginBottom: 5,
    marginTop: 7,
  },

  contentStep: {
    width: '95%',
    fontSize: 11,
    fontFamily: fonts.primaryFont,
    color: colors.GRAY,
  },

  // instructions
  instructionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },

  instructionsText: {
    alignItems: 'center',
    width: '80%',
    textAlign: 'center',
  },

  txtConfirm: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: '700',
    color: colors.BLUE,
  },

  // footer
  footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer_imgButtonConfirm: {
    width: Dimensions.get('screen').width / 3,
    height: 150,
    resizeMode: 'contain',
  },
});
