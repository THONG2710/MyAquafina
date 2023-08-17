import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import {colors} from '../../../../resource/values/color';
import ButtonImg from '../../../../component/Button/ButtonImg';
import {fonts} from '../../../../resource/values/fonts';

const HomeMain = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderComponent headerStyle={styles.header} />
      <ScrollView>
        {/* banner */}
        <View style={styles.Banner}>
          {/* Backgroud */}
          <Image
            style={styles.rippleRingBackground}
            source={require('../../../../resource/images/rippleRing.png')}
          />
          <Image
            style={styles.talentBackground}
            source={require('../../../../resource/images/talent.png')}
          />
          {/* title */}
          <View style={styles.titleContainer}>
            <Text style={[styles.txt, styles.title_line1]}>
              Cùng <Text style={styles.title_hightLight}>Aquafina</Text> bước
              vào
            </Text>
            <View style={styles.title_childContainer}>
              <Text style={[styles.txt, styles.title_childText]}>THẾ GIỚI</Text>
              <Image
                style={styles.title_childImg}
                source={require('../../../../resource/images/xanh.png')}
              />
            </View>
            <Text style={[styles.txt, styles.title_childText]}>
              THUẦN KHIẾT
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonImg btnStyle={styles.buttonMore} text="Tìm hiểu thêm" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.LIGHT_5_BLUE,
  },

  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  // ================== heaeder =====================
  header: {
    marginTop: 0,
    height: 60,
  },

  // ================== Banners =====================
  Banner: {
    width: '100%',
    flex: 1,
  },

  // ================== background =====================
  rippleRingBackground: {
    width: 430,
    height: 430,
    resizeMode: 'contain',
    position: 'absolute',
    left: -50,
    top: -10,
  },

  talentBackground: {
    width: 360,
    height: 430,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: -5,
  },

  // ================= title =====================
  titleContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 20,
  },

  title_line1: {
    fontSize: 22,
  },

  title_hightLight: {
    fontWeight: '700',
  },

  title_childContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: -15,
  },

  title_childText: {
    fontSize: 34,
    fontWeight: '900',
  },

  title_childImg: {
    width: 160,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 7,
  },

  buttonContainer: {
    width: '100%',
    marginTop: Dimensions.get('screen').height - 460,
    alignItems: 'center',
  },

  buttonMore: {
    width: Dimensions.get('screen').width/2,
    marginBottom: 50,
  },
});
