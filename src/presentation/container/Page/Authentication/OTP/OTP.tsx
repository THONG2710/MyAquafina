import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import TextFeild from '../../../../component/Input/TextFeild';
import ButtonImg from '../../../../component/Button/ButtonImg';
import {fonts} from '../../../../resource/values/fonts';
import {colors} from '../../../../resource/values/color';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextView from 'react-native-otp-textinput';
import {OTPProp} from './type';
import { useAppDispatch } from '../../../../shared-state/Redux/Hook/Hook';
import { Login } from '../../../../shared-state/Redux/Actions/AuthenticationActions';

const OTP: React.FC<OTPProp> = props => {
  const {navigation} = props;
  const phoneNumber = props.route.params.phoneNumber;
  const isLogin = props.route.params.isLogin;
  const [isCorrect, setIsCorrect] = useState(true);
  const [otpInput, setOTPInput] = useState('');
  const dispatch = useAppDispatch();
  const otp = useRef(null);

  const CheckOTP = () => {
    if (otpInput == '1234') {
      setIsCorrect(true);
      navigation.navigate(isLogin ? 'PageDrawer' : 'SignUpSuccess');
      dispatch(Login(true));
    } else {
      setIsCorrect(false);
    }
  };

  const handleInputOtp = (value: string) => {
    setOTPInput(value)
  }

  const ResetOTP = () => {
    otp.current.clear();
    setIsCorrect(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundAdv}
        source={require('../../../../resource/images/adv.png')}
      />
      <ImageBackground
        style={styles.backgroundCutting}
        source={require('../../../../resource/images/cuttingBig.png')}
      />

      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0.1)',
          'rgba(255, 255, 255, 0.2)',
          colors.WHITE,
          'rgba(255, 255, 255, 0.6)',
        ]}
        style={styles.gradient}></LinearGradient>

      <TouchableOpacity onPress={() => navigation.replace('PageDrawer')}>
        <Image
          style={styles.iconHome}
          source={require('../../../../resource/images/home.png')}
        />
      </TouchableOpacity>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.header_logo}
          source={require('../../../../resource/images/logoAquafina.png')}
        />
        <Image
          style={styles.header_imgCuttingMask}
          source={require('../../../../resource/images/cuttingMask.png')}
        />
        <Text style={[styles.txt, styles.header_txtLine1]}>
          CHÀO MỪNG BẠN ĐẾN VỚI
        </Text>
        <Text style={[styles.txt, styles.header_txtLine2]}>TRẠM TÁI SINH</Text>
        <Text style={[styles.txt, styles.header_txtLine3]}>CỦA AQUAFINA</Text>
        <Text style={[styles.txt, styles.header_txtLine4]}>
          NƠI TÁI SINH VÒNG ĐỜI MỚI CHO CHAI NHỰA
        </Text>
      </View>
      {/* body */}
      <View style={styles.body}>
        <Text style={[styles.txt, styles.body_title]}>NHẬP OTP</Text>
        <Text style={styles.body_content}>
          Một mã OTP vừa được gửi vào số{' '}
          <Text style={[styles.body_content, {fontWeight: '700'}]}>
            {phoneNumber}
          </Text>
        </Text>
        <View style={styles.body_inputContainer}>
          <OTPTextView
            textInputStyle={{
              width: 50,
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              borderBottomWidth: 1,
              color: isCorrect?colors.BLUE:colors.RED,
              zIndex: 1,
            }}
            tintColor={isCorrect ? colors.GRAY : colors.RED}
            offTintColor={isCorrect ? colors.GRAY : colors.RED}
            inputCount={4}
            defaultValue={otpInput}
            handleTextChange={(value) => handleInputOtp(value)}
            ref={otp}
          />
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <ButtonImg isButtonLight={false} text="Xác nhận" onPress={CheckOTP} />
        <Text style={[styles.txt, styles.footer_txtTimeCode]}>
          Mã sẽ được gửi trong vòng{' '}
          <Text style={styles.footer_time}>30 GIÂY</Text>
        </Text>
        <TouchableOpacity onPress={ResetOTP}>
          <Text style={[styles.txt]}>Gửi lại mã</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    overflow: 'hidden',
  },

  iconHome: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    top: 5,
    left: -Dimensions.get('screen').width / 2 + 10,
  },

  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  gradient: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
  },

  // ==================== header ======================
  header: {
    alignItems: 'center',
    height: Dimensions.get('screen').height / 3 - 50,
    marginTop: 5,
  },

  header_logo: {
    width: Dimensions.get('screen').width / 3 - 20,
    height: Dimensions.get('screen').height / 18,
    resizeMode: 'contain',
    marginTop: 5,
    marginBottom: 5,
  },

  header_imgCuttingMask: {
    position: 'absolute',
    zIndex: 1,
    width: 90,
    height: 90,
    resizeMode: 'contain',
    top: 55,
    left: -10,
  },

  header_txtLine1: {
    fontSize: 16,
    fontWeight: '600',
  },

  header_txtLine2: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: -5,
    position: 'relative',
  },

  header_txtLine3: {
    fontSize: 28,
    fontWeight: '500',
    marginTop: -5,
  },

  header_txtLine4: {
    fontSize: 9.1,
    fontWeight: '700',
  },

  //   =================== body =================
  body: {
    width: '100%',
    height: Dimensions.get('screen').height / 5,
    alignItems: 'center',
    marginTop: -20,
  },

  body_title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },

  body_content: {
    fontSize: 12,
    marginBottom: 20,
  },

  body_inputContainer: {
    width: '100%',
    alignItems: 'center',
  },

  body_otpInput: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    color: colors.BLUE,
    zIndex: 1,
  },

  //
  backgroundAdv: {
    width: '80%',
    height: (Dimensions.get('screen').height / 10) * 4,
    resizeMode: 'contain',
    position: 'absolute',
    left: '20%',
    top: (Dimensions.get('screen').height / 10) * 5.5,
  },

  backgroundCutting: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    position: 'absolute',
    left: '20%',
    top: (Dimensions.get('screen').height / 10) * 6.6,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '20%',
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    top: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  //  ============================ footer ====================
  footer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },

  footer_txtTimeCode: {
    width: '70%',
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 10,
    color: colors.GRAY,
  },

  footer_time: {
    color: colors.RED,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
