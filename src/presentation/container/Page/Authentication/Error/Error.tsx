import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import ButtonImg from '../../../../component/Button/ButtonImg';

const Error = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Pressable>
          <Image
            style={styles.header_menu}
            source={require('../../../../resource/images/menu.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.header_logo}
            source={require('../../../../resource/images/logoAquafina.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.header_logout}
            source={require('../../../../resource/images/logout.png')}
          />
        </Pressable>
      </View>

      {/* background */}
      <ImageBackground
        style={styles.background}
        source={require('../../../../resource/images/cuttingMask.png')}
      />

      {/* body */}
      <View style={styles.body}>
        <ImageBackground
          style={styles.body_layer}
          source={require('../../../../resource/images/cuttingMask.png')}
        />
        <Text style={[styles.txt, styles.body_line1]}>
          <Text style={[styles.txt, styles.body_line1, {fontSize: 80}]}>
            oo
          </Text>
          PS
        </Text>
        <Text style={[styles.txt, styles.body_line2]}>404</Text>
        <Text style={[styles.txt, styles.body_line3]}>ĐÃ XẢY RA LỖI</Text>
        <Text style={[styles.txt, styles.body_content]}>
          Đã xảy ra lỗi trong quá trình kết nối, Vui lòng kiểm tra và thử lại
          sau!
        </Text>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <ButtonImg isButtonLight={false} text='Thử lại' btnStyle={styles.footer_btnAgain}/>
      </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },

  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  // ================ header =================
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    backgroundColor: colors.WHITE,
  },

  header_menu: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 20,
  },

  header_logo: {
    width: Dimensions.get('screen').width / 3,
    height: 50,
    resizeMode: 'contain',
  },

  header_logout: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 20,
  },

  // ================= background =======================
  background: {
    width: 700,
    height: 700,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: -1,
    top: -100,
    left: -300,
  },

  //  =================== body =======================
  body: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '70%',
    justifyContent: 'center',
  },

  body_line1: {
    fontSize: 60,
    fontWeight: 'bold',
  },

  body_line2: {
    fontSize: 90,
    fontWeight: 'bold',
    marginTop: -40,
  },

  body_line3: {
    fontSize: 21,
    marginTop: -20,
    fontWeight: 'bold',
  },

  body_layer: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
    top: 70,
    left: 73,
  },

  body_content: {
    width: Dimensions.get('screen').width/4*3,
    textAlign: 'center',
    marginTop: 70,
    color: colors.GRAY,
  },

//   ======================== footer ========================
footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
},

footer_btnAgain: {
    width: Dimensions.get('screen').width/2
}
});
