import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import Address from '../Home/Address';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import ButtonImg from '../../../../component/Button/ButtonImg';
import LinearGradient from 'react-native-linear-gradient';
import MapView from 'react-native-maps';
import Footer from '../Middle/Footer';
import { PureMapProp } from './type';

const PureMap:React.FC<PureMapProp> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation}/>
      <ScrollView>
        <View style={styles.body}>
          <Image
            style={styles.body_imgTitle}
            source={require('../../../../resource/images/textRebirthStation.png')}
          />
          <Image
            style={styles.body_imgRipple1}
            source={require('../../../../resource/images/rippleRing.png')}
          />
          <Image
            style={styles.body_imgRipple2}
            source={require('../../../../resource/images/rippleRing2.png')}
          />
          <Image
            style={styles.body_imgMachine}
            source={require('../../../../resource/images/machine.png')}
          />
        </View>

        <View>
          <View style={[styles.addressContainer]}>
            {/* header */}
            <View style={styles.header}>
              <Text style={[styles.txt, styles.header_title1]}>
                BẢN ĐỒ XANH
              </Text>
              <Text style={[styles.txt, styles.header_title2]}>
                <Text style={styles.header_titleHighLight}>Địa điểm</Text> đặt
              </Text>
              <Image
                style={styles.header_img}
                source={require('../../../../resource/images/textRebirthStation.png')}
              />
            </View>
            {/* body */}
            <View style={styles.addressboy}>
              <View style={styles.body_itemAddress}>
                <ImageBackground
                  style={styles.body_imgMess}
                  source={require('../../../../resource/images/message.png')}>
                  <Text style={styles.body_titleAddress}>HÀ NỘI</Text>
                </ImageBackground>
                <ImageBackground
                  style={styles.body_imgMess2}
                  source={require('../../../../resource/images/message.png')}>
                  <Text style={styles.body_titleAddress2}>TP. HỒ CHÍ MINH</Text>
                </ImageBackground>
                <Image
                  style={styles.body_imgRipple}
                  tintColor={colors.WHITE}
                  source={require('../../../../resource/images/ripple.png')}
                />
                <Image
                  style={styles.body_imgMarker}
                  source={require('../../../../resource/images/marker.png')}
                />
              </View>

              <View>
                <Image
                  style={styles.address_imgRipple2}
                  tintColor={colors.WHITE}
                  source={require('../../../../resource/images/ripple.png')}
                />
                <Image
                  style={styles.body_imgMarker2}
                  source={require('../../../../resource/images/marker.png')}
                />
              </View>

              <View>
                <Image
                  style={styles.body_imgRipple3}
                  tintColor={colors.WHITE}
                  source={require('../../../../resource/images/ripple.png')}
                />
                <Image
                  style={styles.body_imgMarker3}
                  source={require('../../../../resource/images/marker.png')}
                />
              </View>
              <View style={styles.body_btnContainer}>
                <ButtonImg btnStyle={styles.body_btn} text="Khám phá ngay" />
              </View>
            </View>
          </View>
        </View>

        <LinearGradient
          style={styles.partner}
          colors={[colors.WHITE, colors.LIGHT_11_BLUE]}>
          <Image
            tintColor={colors.LIGHT_11_BLUE}
            style={styles.partnerBackground}
            source={require('../../../../resource/images/ripple.png')}
          />
          <Image
            tintColor={colors.LIGHT_11_BLUE}
            style={styles.partnerBackground2}
            source={require('../../../../resource/images/ripple.png')}
          />
          <Text style={styles.header_title}>ĐỐI TÁC</Text>
          <Text style={styles.title2}>
            Aquafina hân hạnh đồng hành cùng các đối tác để lan tỏa phong cách
            Xanh.
          </Text>
          <View style={styles.partnerContainer}>
            <Image
              style={styles.partnerimg}
              source={require('../../../../resource/images/partnerCoop.png')}
            />
            <Image
              style={styles.partnerimg}
              source={require('../../../../resource/images/partnerLottemart.png')}
            />
          </View>

          <Text style={styles.titleMap}>
            Địa điểm đặt “Trạm tái sinh” trên bản đồ
          </Text>
          <View style={styles.mapContainer}>
            <MapView
              style={{width: '100%', height: '100%'}}
              initialRegion={{
                latitude: 10.8188759,
                longitude: 106.6228497,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
              }}
            />
          </View>
        </LinearGradient>
        {/* footer */}
        <Footer navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

export default PureMap;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.LIGHT_5_BLUE,
    paddingBottom: 50,
  },

  //   =============================== station styles =============================
  body: {
    width: '100%',
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    marginTop: 30,
  },

  body_imgTitle: {
    width: 120,
    height: 170,
    resizeMode: 'contain',
    zIndex: 1,
  },

  body_imgRipple1: {
    position: 'absolute',
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
    top: -130,
    left: -10,
  },

  body_imgRipple2: {
    position: 'absolute',
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    right: -50,
    top: 130,
  },

  body_imgMachine: {
    width: '90%',
    height: '40%',
    resizeMode: 'contain',
    marginLeft: 50,
  },

  //    ==================================== address styles ================================
  addressContainer: {
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 7.7,
    backgroundColor: colors.LIGHT_5_BLUE,
    overflow: 'hidden',
    marginTop: -100,
  },

  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  // ======================== header ========================
  header: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  header_title1: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  header_title2: {
    fontSize: 18,
  },

  header_titleHighLight: {
    fontWeight: 'bold',
  },

  header_img: {
    width: 110,
    height: 130,
    resizeMode: 'contain',
    zIndex: 1,
  },

  // ========================= body =================
  addressboy: {
    width: '100%',
    flex: 1,
  },

  body_itemAddress: {
    // position: 'absolute',
  },

  body_imgRipple: {
    position: 'absolute',
    width: 500,
    height: 500,
    resizeMode: 'contain',
    zIndex: -2,
    top: -60,
    left: -10,
  },

  body_imgMarker: {
    position: 'absolute',
    top: 90,
    right: 85,
    width: 70,
    height: 100,
    resizeMode: 'contain',
    zIndex: 1,
  },

  body_imgMess: {
    position: 'absolute',
    width: 110,
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',
    top: 40,
    right: 65,
    padding: 10,
    zIndex: 2,
  },

  body_imgMess2: {
    position: 'absolute',
    width: 140,
    height: 55,
    resizeMode: 'contain',
    alignItems: 'center',
    top: 195,
    right: 65,
    padding: 10,
    zIndex: 2,
  },

  body_titleAddress: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontFamily: fonts.primaryFont,
    fontSize: 13,
  },

  body_titleAddress2: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontFamily: fonts.primaryFont,
    fontSize: 13,
    marginTop: 5,
  },

  //   2
  address_imgRipple2: {
    position: 'absolute',
    width: 450,
    height: 450,
    resizeMode: 'contain',
    top: 100,
  },

  body_imgMarker2: {
    top: 240,
    left: 195,
    width: 60,
    height: 90,
    resizeMode: 'contain',
    zIndex: 1,
  },

  //   3
  body_imgRipple3: {
    position: 'absolute',
    width: 400,
    height: 400,
    resizeMode: 'contain',
    top: 70,
    left: -150,
  },

  body_imgMarker3: {
    top: 200,
    left: 20,
    width: 60,
    height: 70,
    resizeMode: 'contain',
    zIndex: 1,
  },

  body_btnContainer: {
    width: '100%',
    marginTop: 165,
    flex: 1,
    alignItems: 'center',
  },

  body_btn: {
    width: Dimensions.get('screen').width / 2 - 20,
  },

  //   =================================== partner styles =================================
  partner: {
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
  },

  partnerBackground: {
    position: 'absolute',
    width: Dimensions.get('screen').width / 2 + 100,
    height: Dimensions.get('screen').width / 2 + 100,
    resizeMode: 'contain',
    top: -120,
    left: -140,
  },

  partnerBackground2: {
    position: 'absolute',
    width: Dimensions.get('screen').width / 2 + 100,
    height: Dimensions.get('screen').width / 2 + 100,
    resizeMode: 'contain',
    top: 150,
    right: -100,
  },

  header_title: {
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLUE,
    marginVertical: 20,
  },

  title2: {
    fontFamily: fonts.primaryFont,
    fontSize: 11,
    color: colors.BLUE,
    textAlign: 'center',
    width: '80%',
  },

  partnerContainer: {
    flexDirection: 'row',
    marginVertical: 60,
    width: '100%',
    justifyContent: 'space-evenly',
  },

  partnerimg: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },

  //   ================================ map ==========================
  titleMap: {
    fontFamily: fonts.primaryFont,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLUE,
    marginVertical: 20,
  },

  mapContainer: {
    width: Dimensions.get('screen').width - 40,
    height: Dimensions.get('screen').height/4,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 50,
  },
});
