import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import TextFeild from '../../../../component/Input/TextFeild';
import ButtonImg from '../../../../component/Button/ButtonImg';
import {fonts} from '../../../../resource/values/fonts';
import {colors} from '../../../../resource/values/color';
import LinearGradient from 'react-native-linear-gradient';
import { SignUpSuccessProp } from './type';
import { adv, cuttingBig, cuttingMask, home, logoAquafina } from '../../../../resource/images';

const SignUpSuccess: React.FC<SignUpSuccessProp> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundAdv}
        source={{uri: adv}}
      />
      <ImageBackground
        style={styles.backgroundCutting}
        source={{uri: cuttingBig}}  
      />

      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0.1)',
          'rgba(255, 255, 255, 0.2)',
          colors.WHITE,
          'rgba(255, 255, 255, 0.6)',
        ]}
        style={styles.gradient}></LinearGradient>

      <Pressable>
        <Image
          style={styles.iconHome}
          source={{uri: home}}
        />
      </Pressable>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.header_logo}
          source={{uri: logoAquafina}}
        />
        <Image
          style={styles.header_imgCuttingMask}
          source={{uri: cuttingMask}}
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
        <Text style={[styles.txt, styles.body_title]}>Đăng ký thành công</Text>
        <Text style={[styles.txt, styles.body_content]}>Vui lòng đăng nhập để bắt đầu chương trình</Text>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <ButtonImg isButtonLight={false} text="Đăng nhập" onPress={() => navigation.navigate('SignIn')}/>
      </View>
    </View>
  );
};

export default SignUpSuccess;

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
    height: Dimensions.get('screen').height / 4,
    alignItems: 'center',
    marginTop: -20,
  },

  body_title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },

  body_content: {
    fontSize: 13,
    color: colors.GRAY,
    marginVertical: 20,
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

  //  ============================ footer ====================
  footer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 200,
  },
});
