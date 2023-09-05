import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import {colors} from '../../../../resource/values/color';
import ButtonImg from '../../../../component/Button/ButtonImg';
import {fonts} from '../../../../resource/values/fonts';
import Charts from './Charts';
import Present from './Present';
import Address from './Address';
import Footer from '../Middle/Footer';
import Banners from './Banners/Banners';
import {HomeMainProp} from './type';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../shared-state/Redux/Hook/Hook';
import {getMyPlace} from '../../../../shared-state/Redux/Actions/AuthenticationActions';
import {fetchUsers} from '../../../../shared-state/Redux/Thunks/GetUsersThunks';
import {fetchImages} from '../../../../shared-state/Redux/Thunks/ImagesThunks';
import ReactNativeModal from 'react-native-modal';
import {bottle, bottleOther, happy, ripple} from '../../../../resource/images';

const HomeMain: React.FC<HomeMainProp> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const [showPopup, setshowPopup] = useState(false);
  const user = useAppSelector(state => state.LoginReducer.user);
  const isLogged = useAppSelector(state => state.authentication.isLogged);

  useEffect(() => {
    dispatch(fetchImages());
    isLogged ? setshowPopup(true) : setshowPopup(false);
    console.log(user);
    
  }, [user]);

  return (
    <View style={styles.container}>
      <ReactNativeModal isVisible={showPopup}>
        <View style={styles.container2}>
          <View style={styles.smallContainer}>
            <Text style={styles.title}>CHÚC MỪNG!</Text>
            <Image style={styles.imgBg} source={{uri: happy}} />
            <Image
              tintColor={colors.LIGHT_4_BLUE}
              style={{
                position: 'absolute',
                width: 300,
                height: 300,
                top: 130,
                left: -100,
              }}
              source={{uri: ripple}}
            />
            <Text style={styles.content}>
              Bạn đã đổi thành công{' '}
              <Text style={{fontWeight: 'bold', color: colors.RED}}>100</Text>{' '}
              điểm với:
            </Text>
            <View style={{width: '80%'}}>
              <View style={styles.footer}>
                <Image style={styles.footer_img} source={{uri: bottle}} />
                <Text style={styles.footer_txt}>
                  <Text style={styles.footer_txtBottle}>{user.bottleAqua}</Text> chai Aquafina
                </Text>
              </View>
              <View style={styles.footer}>
                <Image style={styles.footer_img} source={{uri: bottleOther}} />
                <Text style={styles.footer_txt}>
                  <Text style={styles.footer_txtBottle}>{user.bottleOther}</Text> chai khác
                </Text>
              </View>
              <View
                style={{width: '100%', alignItems: 'center', marginTop: 10}}>
                <ButtonImg
                  text="Đồng ý"
                  btnStyle={{width: Dimensions.get('screen').width / 4}}
                  onPress={() => setshowPopup(!showPopup)}
                />
              </View>
            </View>
          </View>
        </View>
      </ReactNativeModal>
      {/* Header */}
      <HeaderComponent headerStyle={styles.header} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* banner */}
        <Banners navigation={navigation} />
        {/* Chart */}
        <Charts navigation={navigation} />
        {/* Present */}
        <Present navigation={navigation} />
        {/* address */}
        <Address navigation={navigation} />
        {/* footer */}
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  // ================== heaeder =====================
  header: {
    marginTop: 0,
    height: 60,
  },

  container2: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  smallContainer: {
    height: Dimensions.get('screen').height / 3 + 80,
    borderRadius: 10,
    width: Dimensions.get('screen').width / 2 + 60,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    overflow: 'hidden',
  },

  content: {
    fontFamily: fonts.primaryFont,
    fontSize: 12,
    color: colors.BLUE,
    marginTop: 30,
  },

  imgBg: {
    width: '100%',
    height: '20%',
    position: 'absolute',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: fonts.primaryFont,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLUE,
    marginTop: 20,
  },

  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: 90,
  },

  footer_img: {
    width: 35,
    height: 70,
    resizeMode: 'contain',
  },

  footer_info: {
    flexDirection: 'row',
  },

  footer_txtBottle: {
    fontFamily: fonts.primaryFont,
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.DARK_YELLOW,
  },

  footer_txt: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    color: colors.BLUE,
  },
});
