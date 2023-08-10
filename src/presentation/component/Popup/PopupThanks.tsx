import {Dimensions, Image, StyleSheet, Text, TextProps, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';

export interface ModalThanksProps extends TextProps {
  onPress?: () => void;
}

const PopupThanks: React.FC<ModalThanksProps> = (props) => {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      {/* title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title_txtLine1}>TRẠM TÁI SINH</Text>
        <Text style={styles.title_txtLine2}>CỦA AQUAFINA</Text>
        <Text style={styles.title_txtLine3}>
          NƠI TÁI SINH VÒNG ĐỜI MỚI CHO CHAI NHỰA
        </Text>
      </View>
      {/* thanks */}
      <View style={styles.thanksContainer}>
        <Text style={styles.thanks_txt}>THANK</Text>
        <Text style={styles.thanks_txt}>YOU</Text>
      </View>
      {/* content */}
      <View style={styles.contentContainer}>
        <Text style={styles.content_txt}>
          Cảm ơn bạn đã cùng Aquafina tham gia vào chiến dịch {'\n'}“
          <Text style={[styles.content_txt, styles.content_txtSlogan]}>
            Sải bước phong cách{' '}
            <Text
              style={[styles.content_txt, styles.content_txtSloganHightlight]}>
              Xanh
            </Text>
          </Text>
          ”
        </Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.footer_imgButton} source={require('../../resource/images/btnConfirm.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopupThanks;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '80%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    borderRadius: 10,
  },

  // ============= title ====================
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '25%',
    justifyContent: 'center',
  },

  title_txtLine1: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 28,
    fontWeight: '900',
  },

  title_txtLine2: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 28,
    fontWeight: '400',
  },

  title_txtLine3: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 9,
    fontWeight: '700',
  },

  //  ================== thanks ==================
  thanksContainer: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  thanks_txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 56,
    fontWeight: '900',
    marginTop: -10,
  },

  // ====================== content ===================
  contentContainer: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
  },

  content_txt: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    color: colors.GRAY,
    width: '70%',
    textAlign: 'center',
  },

  content_txtSlogan: {
    color: colors.BLUE,
    fontWeight: '700',
  },

  content_txtSloganHightlight: {
    color: colors.GREEN,
    fontWeight: '700',
  },

  // ================= footer ========================
  footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer_imgButton: {
    width: Dimensions.get('screen').width / 3,
    height: 150,
    resizeMode: 'contain',
  }
});
