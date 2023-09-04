import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {colors} from '../../resource/values/color';
import {fonts} from '../../resource/values/fonts';
import { user } from '../../shared-state/Redux/Reducers/GetUsersReducer';
import { crown, crownBackground } from '../../resource/images';

export interface ItemChartProps extends TextProps {
  places?: number;
  data: user;
}

const ItemChart: React.FC<ItemChartProps> = props => {
  const {places, data} = props;

  const HandleRenderChart = () => {
    if (places == 1) {
      return (
        <View style={styles.container}>
          <View style={styles.left_box}>
            <ImageBackground
              style={styles.placesBackground}
              source={{uri: crownBackground}}>
              <Text style={styles.textPlaces}>{places}</Text>
            </ImageBackground>
            <View style={styles.inforBox}>
              <Image
                style={styles.avatar}
                source={{uri: data.avatar}}
              />
              <Text style={styles.name}>{data.name}</Text>
              <View style={styles.crownContainer}>
                <Image
                  style={styles.crown}
                  source={{uri: crown}}
                />
              </View>
            </View>
          </View>
          <Text style={styles.score}>{data.scores}</Text>
        </View>
      );
    } else if (places === 2) {
      return (
        <View style={[styles.container, {backgroundColor: colors.LIGHT_7_BLUE}]}>
          <View style={styles.left_box}>
            <ImageBackground
              style={styles.placesBackground}
              source={{uri: crownBackground}}>
              <Text style={styles.textPlaces}>{places}</Text>
            </ImageBackground>
            <View style={styles.inforBox}>
              <Image
                style={styles.avatar}
                source={{uri: data.avatar}}
              />
              <Text style={styles.name}>{data.name}</Text>
              <View style={[styles.crownContainer, {backgroundColor: colors.BLUE2}]}>
                <Image
                  style={styles.crown}
                  source={{uri: crown}}
                />
              </View>
            </View>
          </View>
          <Text style={styles.score}>{data.scores}</Text>
        </View>
      );
    } else if (places === 3) {
      return (
        <View style={[styles.container, {backgroundColor: colors.LIGHT_8_BLUE}]}>
          <View style={styles.left_box}>
            <ImageBackground
              style={styles.placesBackground}
              source={{uri: crownBackground}}>
              <Text style={styles.textPlaces}>{places}</Text>
            </ImageBackground>
            <View style={styles.inforBox}>
              <Image
                style={styles.avatar}
                source={{uri: data.avatar}}
              />
              <Text style={styles.name}>{data.name}</Text>
              <View style={[styles.crownContainer, {backgroundColor: colors.LIGHT_9_BLUE}]}>
                <Image
                  style={styles.crown}
                  source={{uri: crown}}
                />
              </View>
            </View>
          </View>
          <Text style={styles.score}>{data.scores}</Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.container, {backgroundColor: colors.WHITE}]}>
          <View style={styles.left_box}>
            <View style={[styles.placesBackground, {width: 35,}]}>
              <Text style={[styles.textPlaces, {color: colors.GRAY, fontSize: 16,}]}>#{places}</Text>
            </View>
            <View style={styles.inforBox}>
              <Image
                style={[styles.avatar, ]}
                source={{uri: data.avatar}}
              />
              <Text style={[styles.name, {color: colors.GRAY}]}>{data.name}</Text>
            </View>
          </View>
          <Text style={[styles.score, {color: colors.GRAY}]}>{data.scores}</Text>
        </View>
      );
    }
  };
  return HandleRenderChart();
};

export default ItemChart;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 80,
    marginLeft: 40,
    backgroundColor: colors.YELLOW,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
  },

  placesBackground: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textPlaces: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: fonts.primaryFont,
    color: colors.WHITE,
  },

  left_box: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inforBox: {
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'center',
  },

  avatar: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 100,
    marginRight: 5,
  },

  name: {
    color: colors.WHITE,
    fontFamily: fonts.primaryFont,
    fontSize: 10,
    fontWeight: 'bold',
  },

  crownContainer: {
    width: 22,
    height: 22,
    backgroundColor: colors.DARK_YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 5,
  },

  crown: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  score: {
    color: colors.WHITE,
    marginRight: 10,
    fontWeight: '700',
  },
});
