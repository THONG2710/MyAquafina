import {Alert, StyleSheet, Text, TextProps, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup, {RadioButton} from 'react-native-radio-buttons-group';
import CircleButton from '../Button/CircleButton';
import Background from '../Background/Background';
import {fonts} from '../../resource/values/fonts';
import {colors} from '../../resource/values/color';

export interface ModalErrorMessage extends TextProps {
  onPress?: () => void;
}

const PopupErrorMessage: React.FC<ModalErrorMessage> = (props) => {
  const {onPress} = props;
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Tôi bỏ chai Aqua nhưng hệ thống không nhận diện được.',
        value: 'option1',
        color: colors.BLUE,
        labelStyle: styles.labelStyle,
      },
      {
        id: '2',
        label: 'Hệ thống không tích điểm cho tôi',
        value: 'option2',
        color: colors.BLUE,
        labelStyle: styles.labelStyle,
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <View style={styles.container}>
      <Background backgroundStyle={{zIndex: -1,height: '110%',}} />
      <Text style={styles.txtTitle}>NỘI DUNG BÁO LỖI</Text>
      <RadioGroup
        containerStyle={styles.contentContainer}
        radioButtons={radioButtons}
        onPress={id => {
          setSelectedId(id);
        }}
        selectedId={selectedId}
      />
      <View style={styles.confirmContainer}>
        <CircleButton
          CircleButtonStyle={styles.CircleButtonStyle}
          imgStyle={styles.imgStyle}
          titleStyle={styles.titleStyle}
          title={'XÁC NHẬN'}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default PopupErrorMessage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    borderRadius: 10,
  },

  txtTitle: {
    fontFamily: fonts.primaryFont,
    fontSize: 21,
    fontWeight: '900',
    color: colors.RED,
    marginVertical: 15,
  },

  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
  },

  labelStyle: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    color: colors.GRAY,
    marginVertical: 5,
  },

  CircleButtonStyle: {
    width: 100,
    height: 100,
    marginTop: 10,
  },

  titleStyle: {
    fontSize: 12,
  },

  imgStyle: {
    width: 100,
    height: 100,
  },

  confirmContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
});
