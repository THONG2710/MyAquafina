import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';

const LifeCircle = () => {
  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        style={styles.imgBackground}
        source={require('../../../../resource/images/rippleRing.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>
          Cùng <Text style={styles.titleHighlight}>Aquafina</Text> khám phá
        </Text>
        <Text style={styles.title2}>
          HÀNH TRÌNH TÁI SINH VÒNG ĐỜI MỚI CHO CHAI NHỰA
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.imgBody} source={require('../../../../resource/images/life.png')} />
      </View>
    </View>
  );
};

export default LifeCircle;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: colors.LIGHT_5_BLUE,
    alignItems: 'center',
    overflow: 'hidden',
  },

  imgBackground: {
    width: Dimensions.get('screen').width + 200,
    height: Dimensions.get('screen').height / 2 + 100,
    resizeMode: 'contain',
    position: 'absolute',
    left: -50,
    top: -150,
  },

  titleContainer: {
    width: '80%',
    marginTop: 40,  
  },

  title1: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 20,
  },

  title2: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },

  titleHighlight: {
    fontWeight: 'bold',
  },

  imgContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgBody: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 10,
  }
});
