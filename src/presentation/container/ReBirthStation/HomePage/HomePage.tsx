import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../resource/values/color';
import {fonts} from '../../../resource/values/fonts';
import {HomePageProp} from './type';
import CircleButton from '../../../component/Button/CircleButton';

const HomePage: React.FC<HomePageProp> = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.header_logo}
          source={require('../../../resource/images/logoAquafina.png')}
        />
        <Text style={[styles.text, styles.header_txtLine1]}>
          CHÀO MỪNG BẠN ĐẾN VỚI
        </Text>
        <Text style={[styles.text, styles.header_txtLine2]}>TRẠM TÁI SINH</Text>
        <Image
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            top: 54,
            left: 50,
          }}
          source={require('../../../resource/images/cuttingMask.png')}
        />
        <Text style={[styles.text, styles.header_txtLine3]}>CỦA AQUAFINA</Text>
        <Text style={[styles.text, styles.header_txtLine4]}>
          NƠI TÁI SINH VÒNG ĐỜI MỚI CHO CHAI NHỰA
        </Text>
      </View>

      {/* body */}
      <View style={styles.body}>
        <ImageBackground
          style={styles.body_bgImage}
          source={require('../../../resource/images/adv.png')}
        />
        <Image
          style={styles.body_imgBottle}
          source={require('../../../resource/images/cuttingBig.png')}
        />
        <Image
          source={require('../../../resource/images/bottle2.png')}
          style={styles.body_backgroundCuttingMask}
        />
        <CircleButton
          title={'BẮT\nĐẦU'}
          onPress={() => navigation.navigate('Instructions')}
        />
        <Text style={[styles.text, styles.body_txtLine1]}>
          *Hoạt động nằm trong Chiến dịch
        </Text>
        <Text style={[styles.text, styles.body_txtLine2]}>
          Sải bước phong cách <Text style={styles.body_txtXanh}>Xanh</Text> của
          Aquafina
        </Text>

        <View style={styles.body_moreInfo}>
          <Image
            style={styles.body_QA}
            source={require('../../../resource/images/QRcode.png')}
          />
          <Text style={[styles.text, styles.body_txtMore]}>Xem thêm</Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footer_LeftView}>
          <Image
            style={styles.footer_facebook}
            source={require('../../../resource/images/facebook.png')}
          />
          <Text style={[styles.text, styles.footerText]}>Aquafina Vietnam</Text>
        </View>
        <Text style={[styles.text, styles.footerText, {marginRight: 10}]}>
          Aquafina.pepsishop.vn
        </Text>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_BLUE,
  },

  text: {
    fontFamily: fonts.primaryFont,
    fontWeight: '500',
    color: colors.BLUE,
  },

  // header
  header: {
    width: '100%',
    alignItems: 'center',
    height: '25%',
  },

  header_logo: {
    width: '24%',
    height: '20%',
    resizeMode: 'contain',
    marginTop: 7,
    marginBottom: 7,
  },

  header_txtLine1: {
    fontSize: 16,
  },

  header_txtLine2: {
    fontSize: 28,
    fontWeight: '900',
  },

  header_txtLine3: {
    fontSize: 28,
    fontFamily: fonts.primaryFont,
    fontWeight: '300',
  },

  header_txtLine4: {
    fontSize: 10,
  },

  // body
  body: {
    width: '100%',
    height: '72%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  body_imgBottle: {
    position: 'absolute',
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
    top: 212,
  },

  body_backgroundCuttingMask: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
    position: 'absolute',
    top: 220,
    left: -30,
  },

  body_bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },

  body_txtLine1: {
    marginTop: 10,
    fontSize: 8,
  },

  body_txtLine2: {
    fontWeight: '700',
    marginBottom: 25,
    fontSize: 9,
  },

  body_txtXanh: {
    color: colors.GREEN,
  },

  body_moreInfo: {
    position: 'absolute',
    alignItems: 'center',
    justifyConten: 'center',
    bottom: 15,
    right: 17,
  },

  body_QA: {
    width: 50,
    height: 50,
  },

  body_txtMore: {
    fontSize: 9,
    fontWeight: '700',
  },

  // footer
  footer: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  footer_LeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '32%',
    marginLeft: 10,
  },

  footer_facebook: {
    width: 15,
    height: 15,
  },

  footerText: {
    color: colors.WHITE,
    fontSize: 10,
  },
});
