import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import Instroduce from './Instroduce';
import Footer from '../Middle/Footer';
import {PureGiftProp} from './type';
import ItemGift from '../../../../component/Item/ItemGift';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ItemSlideGift from '../../../../component/Item/ItemSlideGift';
import { bg, hat, iconHat, iconShirt, iconSock, iconTote, shirt, sock, tShirt_b, tShirt_w, tote } from '../../../../resource/images';

const data = [
  {
    id: 1,
    name: 'Áo khoác cape\nAquafina x Headles',
    image: shirt,
    icon: iconShirt,
    quantity: 108
  },
  {
    id: 2,
    name: 'Nón lưỡi trai\nAquafina x Repeet',
    image: hat,
    icon: iconHat,
    quantity: 15,
  },
  {
    id: 3,
    name: 'Vớ\nAquafina x Repeet',
    image: sock,
    icon: iconSock,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Áo thời trang\nAquafina x Repeet',
    image: tShirt_w,
    icon: iconShirt,
    quantity: 7
  },
  {
    id: 5,
    name: 'Túi tote\nAquafina = Repeet',
    image: tote,
    icon: iconTote,
    quantity: 2
  },
];

export interface Slide {
  image: string;
}

const PureGift: React.FC<PureGiftProp> = props => {
  const {navigation} = props;
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const renderSlide = ({item, index}: {item: Slide, index: number}) => {
    const isActive: boolean = index === activeItemIndex;
    const itemStyle = isActive ? styles.activeItem : styles.inactiveItem;
    const textActiveStyle = isActive ? colors.WHITE : colors.BLUE;
    const isItemActive = isActive ? true : false

    return (
      <ItemSlideGift item={item} styleMore={itemStyle} textStyle={textActiveStyle} isActive={isItemActive} isShowRiple={isActive ? 'flex' : 'none'}/>
    );
  };
  
  const onSnapToItem: any = (index: number) => {
    setActiveItemIndex(index);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        headerStyle={{marginTop: 0, marginBottom: 0}}
        navigation={navigation}
      />
      <ScrollView>
        {/* gift */}
        <View style={styles.gift}>
          <Text style={styles.gift_text}>Quà Tặng Xanh</Text>
          {/* <Custom data={data} /> */}
          <Carousel
            data={data}
            renderItem={renderSlide}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={190}
            onSnapToItem={index => onSnapToItem(index)}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeItemIndex}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <Image
            style={styles.gift_bg}
            source={{uri: bg}}
          />
        </View>
        {/* Instroduce */}
        <Instroduce navigation={navigation} />
        {/* footer */}
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default PureGift;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  gift: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  gift_text: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  gift_bg: {
    position: 'absolute',
    zIndex: -1,
    top: 200,
    width: Dimensions.get('screen').width + 100,
    height: 200,
    resizeMode: 'contain',
  },

  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.BLUE,
  },
  paginationInactiveDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  activeItem: {
    backgroundColor: colors.BLUE,
  },

  textActive: {
    color: colors.WHITE,
  },

  intextActive: {
    color: colors.GRAY,
  },

  item: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },

  inactiveItem: {
    backgroundColor: colors.WHITE,
  },
});
