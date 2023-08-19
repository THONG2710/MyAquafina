import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextProps,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from 'react-native-reanimated';
import ItemSlideGift from '../../../../component/Item/ItemSlideGift';
import {colors} from '../../../../resource/values/color';


export interface ItemProps extends TextProps {
  data: {image: Object}[];
}

const Custom: React.FC<ItemProps> = props => {
  const {data} = props;
  const {width} = useWindowDimensions();
  const SIZE = width * 0.5;
  const newData = useState([
    {key: 'spacer-left'},
    ...data,
    {key: 'spacer-right'},
  ]);
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const mau = useSharedValue(colors.WHITE); 
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
      mau.value = colors.BLUE;
    },
  });

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate={'fast'}
      onScroll={onScroll}
      >
      {newData[0].map((item, index) => {
        const style = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
            [0.8, 1, 0.8],
          );

          return {transform: [{scale}],};
        });

        if (!item.image) {
          return <View style={{width: SPACER}} key={index} />
        }

        return (
          <View style={{width: SIZE}} key={index}>
            <Animated.View style={[styles.imageContainer, style]}>
              <ItemSlideGift />
            </Animated.View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

export default Custom;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: Dimensions.get('screen').width / 2,
    alignItems: 'center',
  },
});
