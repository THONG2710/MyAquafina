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
import { StartProps } from './type';
import CircleButton from '../../../component/Button/CircleButton';
import Background from '../../../component/Background/Background';
import { cuttingMask, frame1, logoAquafina } from '../../../resource/images';

const Start: React.FC<StartProps> = (props) => {
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
          HÃY CHO CHAI RỖNG VÀO MÁY
        </Text>
      </View>

      {/* body */}    
      <View style={styles.body}>
        <Background/>
        <View style={styles.body_navigationView}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={[styles.textStyle, styles.body_txtBack]}>
              Xem lại hướng dẫn
            </Text>
          </Pressable>
          <View style={styles.body_NameView}>
            <Text style={[styles.textStyle, styles.body_txtLine1]}>TRẠM</Text>
            <Image style={{ width: 50, height: 50, position: 'absolute', top: -10, left: -5 }} source={{uri: cuttingMask}} />
            <Text style={[styles.textStyle, styles.body_txtLine2]}>
              TÁI SINH
            </Text>
            <Text style={[styles.textStyle, styles.body_txtLine3]}>
              CỦA AQUAFINA
            </Text>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgMain}
            source={{uri: frame1}}
          />
        </View>
        <View style={styles.body_contentContainer}>
          <Text style={styles.body_txtContent}>
            Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái{' '}
          </Text>
          <Text style={styles.body_txtNotice}>
            Tự động kết thúc sau:{' '}
            <Text style={styles.body_txtEndTime}>30 GIÂY NỮA</Text>
          </Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <CircleButton title={"KẾT THÚC"} onPress={() => navigation.navigate('Loading')}/>
      </View>
    </View>
  );
};

export default Start;

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

  body_navigationView: {
    flexDirection: 'row',
    width: '92%',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  body_txtBack: {
    borderBottomWidth: 0.5,
    borderColor: colors.BLUE,
    marginTop: 3,
    fontFamily: fonts.primaryFont,
    fontSize: 14,
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

  imgContainer: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgMain: {
    width: '97%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 20,
  },

  //   content
  body_contentContainer: {
    width: '100%',
    alignItems: 'center',
  },

  body_txtContent: {
    fontFamily: fonts.primaryFont,
    color: colors.GRAY,
    textAlign: 'center',
    width: '80%',
    fontSize: 14,
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
    justifyContent: 'center',
  },
});
