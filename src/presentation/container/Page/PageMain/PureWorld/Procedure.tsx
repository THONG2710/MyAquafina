import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import {Shadow} from 'react-native-shadow-2';

const Procedure = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.header_title}>5 bước trong chu trình tái chế</Text>
      </View>
      {/* body */}
      <View style={styles.body}>
        <Image
          tintColor={colors.WHITE}
          style={styles.body_imgRipple}
          source={require('../../../../resource/images/ripple.png')}
        />

        <Shadow distance={5}>
          <View style={styles.body_item}>
            <View style={styles.item_stt}>
              <Text style={styles.item_textStt}>1</Text>
            </View>
            <View style={styles.item_textContainer}>
              <Text style={styles.item_text}>
                Chai nhựa rỗng được thu hồi tại máy
              </Text>
            </View>
          </View>
        </Shadow>

        <Shadow distance={5}>
          <View style={styles.body_item}>
            <View style={styles.item_stt}>
              <Text style={styles.item_textStt}>2</Text>
            </View>
            <View style={styles.item_textContainer}>
              <Text style={styles.item_text}>
                Chai rỗng được nghiền thành mảnh nhựa
              </Text>
            </View>
          </View>
        </Shadow>

        <Shadow distance={5}>
          <View style={styles.body_item}>
            <View style={styles.item_stt}>
              <Text style={styles.item_textStt}>3</Text>
            </View>
            <View style={styles.item_textContainer}>
              <Text style={styles.item_text}>
                Mảnh nhựa được sản xuất thành sợi
              </Text>
            </View>
          </View>
        </Shadow>

        <Shadow distance={5}>
          <View style={styles.body_item}>
            <View style={styles.item_stt}>
              <Text style={styles.item_textStt}>4</Text>
            </View>
            <View style={styles.item_textContainer}>
              <Text style={styles.item_text}>
                Sợi được dệt thành vải và nhuộm
              </Text>
            </View>
          </View>
        </Shadow>

        <Shadow distance={5}>
          <View style={styles.body_item}>
            <View style={styles.item_stt}>
              <Text style={styles.item_textStt}>5</Text>
            </View>
            <View style={styles.item_textContainer}>
              <Text style={styles.item_text}>
                Cuối cùng, vải được sử dụng tạo ra thành phẩm tái chế
              </Text>
            </View>
          </View>
        </Shadow>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <Text style={styles.footer_line1}>
          CÙNG <Text style={{fontWeight: 'bold'}}>AQUAFINA</Text>
        </Text>
        <Text style={styles.footer_line2}>HÀNH ĐỘNG</Text>
        <Text style={styles.footer_line3}>
          VÀ <Text style={styles.footer_line2}>LAN TỎA</Text>
        </Text>
        <Text style={styles.footer_line4}>PHONG CÁCH</Text>
        <Image style={styles.footer_img} source={require('../../../../resource/images/xanh.png')} />
        <Text style={styles.footer_line3}>BỀN VỮNG</Text>
      </View>
    </View>
  );
};

export default Procedure;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: colors.LIGHT_5_BLUE,
  },

  //   ==================== header =================
  header: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
    marginTop: 10,
  },

  header_title: {
    backgroundColor: colors.BLUE,
    color: colors.WHITE,
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontFamily: fonts.primaryFont,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 7,
  },

  //   =================== body ==========================
  body: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    height: '45%',
    justifyContent: 'space-evenly',
  },

  body_imgRipple: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    top: -Dimensions.get('screen').height / 3.5,
    zIndex: -3,
  },

  body_item: {
    backgroundColor: colors.WHITE,
    width: Dimensions.get('screen').width - 32,
    height: 50,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 7,
    borderBottomEndRadius: 7,
    borderRightColor: colors.BLUE,
    borderRightWidth: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },

  item_stt: {
    width: 50,
    height: 50,
    backgroundColor: colors.WHITE,
    borderRadius: 25,
    borderRightColor: colors.BLUE,
    borderBottomColor: colors.BLUE,
    borderLeftColor: colors.LIGHT_6_BLUE,
    borderTopColor: colors.LIGHT_6_BLUE,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  item_textStt: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: 'bold',
  },

  item_textContainer: {
    width: '79%',
    marginLeft: 10,
  },

  item_text: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 13,
  },

  //   ============================= footer =============================
  footer: {
    width: Dimensions.get('screen').width - 140,
    marginLeft: 70,
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },

  footer_line1: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 16,
  },

  footer_line2: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 22,
    fontWeight: 'bold',
  },

  footer_line3: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 22,
  },

  footer_line4: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
    fontSize: 19,
    fontWeight: 'bold',
  },

  footer_img: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginTop: -50,
    marginLeft: 35
  },
});
