import {ImageBackground, StyleSheet, Text, View, Image, TextProps, ViewStyle, StyleProp} from 'react-native';
import React, {useState} from 'react';
import { Svg, Circle } from 'react-native-svg';
import { colors } from '../../resource/values/color';

export interface BackgroundCuttingMaskProps extends TextProps {
  backgroundStyle?: StyleProp<ViewStyle>
}

const Background: React.FC<BackgroundCuttingMaskProps>  = (props)  => {
  const {backgroundStyle} = props;
  return (
      <Svg style={[{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }, backgroundStyle]}>
        <Circle cx="50%" cy="50%" r="70%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="65%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="60%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="55%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="50%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="45%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="40%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="35%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="30%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="25%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="20%" fill={colors.LIGHT_4_BLUE} />
        <Circle cx="50%" cy="50%" r="15%" fill={colors.WHITE}/>
        <Circle cx="50%" cy="50%" r="10%" fill={colors.LIGHT_4_BLUE} />
      </Svg>

  );
};

export default Background;

const styles = StyleSheet.create({});
