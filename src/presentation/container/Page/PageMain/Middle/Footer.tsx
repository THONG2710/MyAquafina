import {
  Dimensions,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export interface FooterProps extends TextProps {
  footerStyle?: StyleProp<ViewStyle>;
  navigation: any;
}

const Footer: React.FC<FooterProps> = (props) => {
  const {footerStyle, navigation} = props;
  return (
    <View style={[styles.container, footerStyle]}>
      <Image
        style={styles.rippleBackground}
        tintColor={colors.LIGHT_11_BLUE}
        source={require('../../../../resource/images/ripple.png')}
      />
      {/* body */}
      <View style={styles.body}>
        <Pressable style={styles.body_buttonNavigate} onPress={() => navigation.navigate('PureWorld')}>
          <Text style={styles.body_textBtn}>Thế Giới Xanh</Text>
        </Pressable>
        <Pressable style={styles.body_buttonNavigate} onPress={() => navigation.navigate('PureGift')}>
          <Text style={styles.body_textBtn}>Quà Tặng Xanh</Text>
        </Pressable>
        <Pressable style={styles.body_buttonNavigate} onPress={() => navigation.navigate('PureMap')}>
          <Text style={styles.body_textBtn}>Bản Đồ Xanh</Text>
        </Pressable>
        <Pressable style={styles.body_buttonNavigate} onPress={() => navigation.navigate('PureCoin')}>
          <Text style={styles.body_textBtn}>Điểm thưởng Xanh</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('PureChart')}
          style={[styles.body_buttonNavigate, styles.body_buttonNavigateEnd]}>
          <Text style={styles.body_textBtn}>Bảng Xếp Hạng</Text>
        </Pressable>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <Text style={styles.footer_instrude}>
          AQUAFINA là thương hiệu nước đóng chai của Pepsico-Suntory.
        </Text>
        <Text style={styles.footer_instrude}>Follow us</Text>
        <View style={styles.footer_follow}>
          <Image
            style={styles.footer_iconFl}
            source={require('../../../../resource/images/iconFacebook.png')}
          />
          <Image
            style={styles.footer_iconFl}
            source={require('../../../../resource/images/youtube.png')}
          />
        </View>
        <Pressable style={styles.footer_waring} onPress={() => navigation.navigate('ReportError')}>
          <Image style={styles.footer_iconWarning} source={require('../../../../resource/images/warning.png')} />
          <Text style={styles.footer_textWarning}>Báo Lỗi</Text>
        </Pressable>
        <Text style={styles.footer_end}>Copyright © 2022 Aquafina Vietnam</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.WHITE,  
  },

  rippleBackground: {
    width: Dimensions.get('screen').width + 120,
    height: Dimensions.get('screen').height + 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: -290,
    left: -60,
  },

  //  ================= body ========================
  body: {
    width: '100%',
  },

  body_buttonNavigate: {
    width: '100%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.LIGHT_3_BLUE,
  },

  body_textBtn: {
    fontFamily: fonts.primaryFont,
    fontSize: 16,
    color: colors.LIGHT_2_BLUE,
  },

  body_buttonNavigateEnd: {
    borderBottomColor: colors.LIGHT_3_BLUE,
    borderBottomWidth: 1,
  },

  //   =================== footer =================
  footer: {
    width: Dimensions.get('screen').width - 100,
    flex: 1,
    marginLeft: 50,
    marginTop: 20,
    alignItems: 'center',
  },

  footer_instrude: {
    textAlign: 'center',
    color: colors.LIGHT_3_BLUE,
    fontWeight: 'bold',
    fontSize: 11,
    width: '100%',
    marginVertical: 5,
  },

  footer_follow: {
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
  },

  footer_iconFl: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  footer_waring: {
    flexDirection: 'row',
    marginTop: 20,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  footer_iconWarning: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  footer_textWarning: {
    color: colors.RED,
    fontFamily: fonts.primaryFont,
    fontSize: 14,
  },

  footer_end: {
    textAlign: "center",
    fontSize: 10,
    color: colors.LIGHT_2_BLUE,
    marginTop: 20,
    marginBottom: 10,
  },
});
