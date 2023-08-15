import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../resource/values/color';
import CircleButton from '../Button/CircleButton';
import { fonts } from '../../resource/values/fonts';

const PopupNotification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>THÔNG BÁO</Text>
      <Text style={styles.txtContent}>Số lượng chai trong máy đã đầy. Xin lỗi vì sự bất tiện này!</Text>
      <View style={styles.cuttingMask1}>
        <View style={[styles.cuttingMask2]}>
          <View style={[styles.cuttingMask3]}>
            <CircleButton title={'XÁC NHẬN'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PopupNotification;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '42%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    overflow: 'hidden',
  },

  txtTitle: {
    fontFamily: fonts.primaryFont,
    fontSize: 32,
    color: colors.BLUE,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },

  txtContent: {
    width: '70%',
    textAlign: 'center',
    fontFamily: fonts.primaryFont,
    fontSize: 13,
    color: colors.GRAY,
  },

  cuttingMask1: {
    borderWidth: 10,
    borderRadius: 500,
    padding: 70,
    position: 'absolute',
    zIndex: -1,
    marginTop: -35,
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
