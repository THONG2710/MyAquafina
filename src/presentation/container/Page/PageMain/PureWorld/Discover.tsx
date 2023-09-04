import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import { bigBottleAquafina, rippleGradient, title } from '../../../../resource/images';

const Discover = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.header_title}>
          Khám phá{' '}
          <Text style={styles.header_titleHighlight}>vòng tròn biểu tượng</Text>
        </Text>
        <Image
          style={styles.header_imgRipple}
          source={{uri: title}}
        />
      </View>
      {/* body */}
      <View style={styles.body}>
        <Image
          style={styles.body_imgRipple}
          source={{uri: rippleGradient}}
        />
        <Image
          style={styles.body_imgBottle}
          source={{uri: bigBottleAquafina}}
        />
      </View>
      {/* discover */}
      <View style={styles.discover}>
        <Text style={styles.discover_title}>AQUAFINA</Text>
        <Text style={styles.discover_content}>
          Tiếp tục hành trình lan tỏa vị ngon của sự tinh khiết và không ngừng
          truyền cảm hứng về phong cách sống thời thượng. Năm 2022, Aquafina
          đánh dấu cột mốc mới tiên phong lan tỏa cảm cảm hứng sống xanh bền
          vững (Sustainability), thời trang hơn và ý nghĩa hơn đến với giới mộ
          điệu yêu thích thời trang. {'\n\n'}Hình ảnh vòng tròn lan tỏa cùng mũi
          tên mang tính biểu tượng với ý nghĩa cùng Aquafina lan tỏa những hành
          động tích cực đến môi trường và truyền cảm hứng về phong cách Xanh bền
          vững.
        </Text>
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.LIGHT_5_BLUE,
  },
  // ======================== header ========================
  header: {
    width: '100%',
    height: Dimensions.get('screen').height/10*2,
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 30,
  },

  header_title: {
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: '400',
    color: colors.BLUE,
    marginBottom: 10,
  },

  header_titleHighlight: {
    fontWeight: 'bold',
  },

  header_imgRipple: {
    width: 160,
    height: 120,
    resizeMode: 'contain',
  },

  // ======================== body ========================
  body: {
    width: '100%',
    height: Dimensions.get('screen').height/10*5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },

  body_imgRipple: {
    position: 'absolute',
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
  },

  body_imgBottle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  //   ================ discover ===============================
  discover: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.LIGHT_6_BLUE,
    paddingBottom: 20,
  },

  discover_title: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 7,
  },

  discover_content: {
    width: '90%',
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    color: colors.GRAY,
  }
});
