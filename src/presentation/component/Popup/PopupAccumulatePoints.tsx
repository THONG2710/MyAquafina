import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CircleButton from '../Button/CircleButton';
import { fonts } from '../../resource/values/fonts';
import { colors } from '../../resource/values/color';

const PopupAccumulatePoints = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Bạn có muốn tích điểm đổi quà không?</Text>
      <Text style={styles.txtInstruction}>Bật camera trên điện thoại để quét QR code</Text>
      <View>
        <View>
          <View>
            <CircleButton title={'TÍCH ĐIỂM'} />
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Text>KHÔNG</Text>
      </TouchableOpacity>
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

  
});
