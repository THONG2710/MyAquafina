import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import CircleButton from '../Button/CircleButton';
import {fonts} from '../../resource/values/fonts';
import {colors} from '../../resource/values/color';
import {Shadow} from 'react-native-shadow-2';

const PopupAccumulatePoints = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.txtTitle}>
          Bạn có muốn tích điểm đổi quà không?
        </Text>
        <Text style={styles.txtInstruction}>
          Bật camera trên điện thoại để quét QR code
        </Text>
        <View style={styles.cuttingMask1}>
          <View style={[styles.cuttingMask2]}>
            <View style={[styles.cuttingMask3]}>
              <CircleButton title={'TÍCH ĐIỂM'} />
            </View>
          </View>
        </View>
      </View>
      <Shadow offset={[0, 25]} distance={5}>
        <TouchableOpacity style={styles.btnNo}>
          <Text style={styles.txtButtonNo}>KHÔNG</Text>
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

export default PopupAccumulatePoints;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },

  contentContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.WHITE,
    overflow: 'hidden',
  },

  txtTitle: {
    fontFamily: fonts.primaryFont,
    fontSize: 20,
    fontWeight: '900',
    color: colors.BLUE,
    textAlign: 'center',
    width: '70%',
    marginTop: 20,
    marginBottom: 10,
  },

  txtInstruction: {
    fontFamily: fonts.primaryFont,
    fontSize: 13,
    fontWeight: '400',
    color: colors.GRAY,
    textAlign: 'center',
    width: '50%',
    marginBottom: 30,
  },

  btnNo: {
    width: Dimensions.get('screen').width / 2 - 110,
    height: Dimensions.get('screen').width / 2 - 110,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.LIGHT_4_BLUE,
    marginTop: 20,
  },

  txtButtonNo: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    color: colors.BLUE,
    fontWeight: 'bold',
  },

  cuttingMask1: {
    borderWidth: 10,
    borderRadius: 500,
    padding: 70,
    position: 'absolute',
    zIndex: -1,
    marginTop: -50,
    borderColor: colors.LIGHT_4_BLUE,
  },

  cuttingMask2: {
    borderWidth: 10,
    borderRadius: 200,
    padding: 60,
    borderColor: colors.LIGHT_4_BLUE,
  },

  cuttingMask3: {
    borderWidth: 10,
    borderRadius: 200,
    padding: 30,
    borderColor: colors.LIGHT_4_BLUE,
  },
});
