import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import {ScrollView} from 'react-native';
import ItemSlideGift from '../../../../component/Item/ItemSlideGift';
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const SwipperTest = () => {
  const list = [{_id: 1}, {_id: 2}, {_id: 3}, {_id: 4}, {_id: 5}];

  return (
    <Swiper
      style={styles.wrapper}
      >
      <View style={[styles.slide1,]}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

export default SwipperTest;

const styles = StyleSheet.create({
  wrapper: {
    flexWrap: 'nowrap',
  },
  slide1: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    width: '80%',
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
