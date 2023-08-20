import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors } from '../../../../resource/values/color';
import { fonts } from '../../../../resource/values/fonts';

const Station = () => {
  return (
    <View style={styles.container}>
      {/* body */}
      <View style={styles.body}>
        <Image
            style={styles.body_imgTitle}
          source={require('../../../../resource/images/textRebirthStation.png')}
        />
        <Image style={styles.body_imgRipple1} source={require('../../../../resource/images/rippleRing.png')} />
        <Image style={styles.body_imgRipple2} source={require('../../../../resource/images/rippleRing2.png')} />
        <Image style={styles.body_imgMachine} source={require('../../../../resource/images/machine.png')} />
      </View>
      {/* content */}
      <View style={styles.content}>
        <Text style={styles.content_text}>
          Không chỉ lan tỏa cảm hứng sống Xanh, Aquafina sẽ cùng bạn hành động
          để mang đến những tác động tích cực đến môi trường. Lần đầu tiên tự
          hào giới thiệu, Trạm Tái Sinh của Aquafina – Nơi tái sinh vòng đời mới
          cho chai nhựa.
        </Text>
      </View>
    </View>
  );
};  

export default Station;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.LIGHT_5_BLUE,
    },

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

    // ========================== content =========================
    content: {
        width: '100%',
        marginTop: -200,
        alignItems: 'center',
    },
    
    content_text: {
        width: '90%',
        fontFamily: fonts.primaryFont,
        fontSize: 14,
        fontWeight: '500',
        color: colors.GRAY,
    }
});
