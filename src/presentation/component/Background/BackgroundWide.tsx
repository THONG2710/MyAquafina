import {ImageBackground, StyleSheet, Text, View, Image, TextProps, ViewStyle, StyleProp} from 'react-native';
import React, {useState} from 'react';
import { Svg, Circle } from 'react-native-svg';
import { colors } from '../../resource/values/color';

export interface BackgroundCuttingMaskProps extends TextProps {
  backgroundStyle?: StyleProp<ViewStyle>
}

const BackgroundWide: React.FC<BackgroundCuttingMaskProps>  = (props)  => {
  const {backgroundStyle} = props;
  return (
      <Svg style={[{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }, backgroundStyle]}>
        <Circle cx="50%" cy="50%" r="70%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="65%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="50%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="45%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="30%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="25%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="15%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="10%" fill={colors.WHITE}/>
      </Svg>

  );
};

export default BackgroundWide;

const styles = StyleSheet.create({});
