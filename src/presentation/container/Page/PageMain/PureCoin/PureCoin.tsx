import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {PureCoinProp} from './type';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import TextFeildDark from '../../../../component/Input/TextFeildDark';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import {ScrollView} from 'react-native';
import Footer from '../Middle/Footer';
import ReactNativeModal from 'react-native-modal';
import PopupOnLogin from '../../../../component/Popup/PopupOnLogin';
import { useAppDispatch, useAppSelector } from '../../../../shared-state/Redux/Hook/Hook';
import { showModalLogin } from '../../../../shared-state/Redux/Actions/AuthenticationActions';

const PureCoin: React.FC<PureCoinProp> = props => {
  const {navigation} = props;
  const showModal = useAppSelector((state) => state.authentication.showModalLogin)
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.LoginReducer.user)

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <ReactNativeModal isVisible={showModal}>
        <PopupOnLogin onPress={() => dispatch(showModalLogin(false))} />
      </ReactNativeModal>
      <ScrollView>
        {/* title */}
        <View style={styles.title}>
          <Text style={styles.textTitle}>Thông tin người chơi</Text>
        </View>
        <View style={styles.avatar}>
          <Image
            style={styles.avatar_img}
            source={{uri: user.avatar}}
          />
          <Pressable>
            <Image
              style={styles.avatar_btnChange}
              source={require('../../../../resource/images/btnCamera.png')}
            />
          </Pressable>
        </View>
        {/* avatar */}
        <View style={styles.information}>
          <TextFeildDark editable={false} value={user.name} title="Họ và tên" />
          <TextFeildDark editable={false} value={user.phoneNumber} title="Số điện thoại" />
        </View>
        {/* background */}
        <Image
          style={styles.background}
          tintColor={colors.LIGHT_4_BLUE}
          source={require('../../../../resource/images/ripple.png')}
        />
        {/* coin */}
        <View style={styles.coin}>
          <Image
            style={styles.coin_imgBackground}
            source={require('../../../../resource/images/message2.png')}
          />
          <Text style={styles.coin_text}>Số Điểm tích lũy:</Text>
          <Text style={styles.coin_textScore}>{user.scores}</Text>
        </View>
        {/* thanks */}
        <View style={styles.thanks}>
          <Text style={styles.thanks_text}>
            CẢM ƠN BẠN ĐÃ THAM GIA{'\n'}
            CHIẾN DỊCH "SẢI BƯỚC PHONG CÁCH XANH"{'\n'}
            CÙNG AQUAFINA
          </Text>
        </View>
        {/* stroke */}
        <View style={styles.stroke}>
          <Image
            style={styles.stroke_image}
            source={require('../../../../resource/images/strokeAqua.png')}
          />
        </View>
        {/* footer */}
        <Footer navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

export default PureCoin;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  // ====================== title =====================
  title: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },

  textTitle: {
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLUE,
  },

  // =================== avatar =====================
  avatar: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },

  avatar_img: {
    width: Dimensions.get('screen').width / 3,
    height: Dimensions.get('screen').width / 3,
    resizeMode: 'contain',
    borderRadius: 60,
  },

  avatar_btnChange: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: -17,
    left: 20,
  },

  information: {
    width: Dimensions.get('screen').width - 32,
    marginLeft: 16,
    height: Dimensions.get('screen').height / 4.5,
    justifyContent: 'space-between',
  },

  // ===================== coin =================
  coin: {
    width: '100%',
    height: Dimensions.get('screen').height / 3 + 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  coin_imgBackground: {
    position: 'absolute',
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
  },

  coin_text: {
    fontFamily: fonts.primaryFont,
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.BLUE,
    marginTop: -50,
  },

  coin_textScore: {
    fontFamily: fonts.primaryFont,
    fontSize: 70,
    fontWeight: 'bold',
    color: colors.DARK_YELLOW,
    marginTop: -10,
  },

  // ================== background =================
  background: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    zIndex: -1,
    left: -100,
    top: 100,
  },

  // ================ thanks =================
  thanks: {
    width: '90%',
    marginLeft: 20,
    marginTop: 50,
  },

  thanks_text: {
    fontFamily: fonts.primaryFont,
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.BLUE,
  },

  // ================== stroke =================
  stroke: {
    width: '100%',
    marginTop: 50,
  },

  stroke_image: {
    width: '80%',
    height: 40,
    resizeMode: 'contain',
  },
});
