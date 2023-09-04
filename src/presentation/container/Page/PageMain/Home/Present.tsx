import {Dimensions, Image, StyleSheet, TextProps, View} from 'react-native';
import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {Text} from 'react-native';
import ButtonImg from '../../../../component/Button/ButtonImg';
import {fonts} from '../../../../resource/values/fonts';
import {colors} from '../../../../resource/values/color';
import ItemSlideGift from '../../../../component/Item/ItemSlideGift';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import { Slide } from '../PureGift/PureGift';
import { hat, iconHat, iconShirt, iconSock, iconTote, ripple, shirt, sock, tShirt_b, tShirt_w, tote, xanh } from '../../../../resource/images';

export interface PresentProp extends TextProps {
  navigation?: any;
}

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

const Present: React.FC<PresentProp> = (props) => {
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
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.txt, styles.header_title]}>QUÀ TẶNG XANH</Text>
        <Text style={[styles.txt, styles.header_title2]}>PHỤ KIỆN</Text>
        <Image
          style={styles.header_xanh}
          source={{uri: xanh}}
        />
        <Text style={[styles.txt]}>
          Tự tin{' '}
          <Text style={[styles.txt, styles.header_highLight]}>Sải bước</Text>
        </Text>
        <Text style={[styles.txt, styles.header_txtSource]}>
          QUÀ TẶNG ĐƯỢC LÀM TỪ VẢI TÁI CHẾ CỦA AQUAFINA
        </Text>
      </View>
      {/* slides */}
      <View style={styles.slides}>
        <Image tintColor={colors.LIGHT_11_BLUE} style={styles.slides_imgRipple} source={{uri: ripple}}/>
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
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <ButtonImg btnStyle={styles.footer_btn} text="Khám phá ngay" onPress={() => navigation.navigate('PureGift')}/>
      </View>
    </View>
  );
};

export default Present;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:  Dimensions.get('screen').height/10*7.5,
    backgroundColor: colors.WHITE,
  },


  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  // header
  header: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },

  header_title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  header_title2: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  header_xanh: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginTop: -30,
    zIndex: -1,
  },

  header_highLight: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  header_txtSource: {
    fontSize: 16,
    textAlign: 'center',
    width: '75%',
    marginTop: 10,
    fontWeight: 'bold',
  },

  // ================ slides =================================
  slides: {
    width: '100%',
    height: '50%',
    marginTop: 50,
    zIndex: 10,
  },

  slides_imgRipple: {
    position: 'absolute',
    width: 520,
    height: 520,
    resizeMode: 'contain',
    top: -120,
    left: -75,
    zIndex: -10,
  },

  // ================= footer ============================
  footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    zIndex: 100,
  },

  footer_btn: {
    width: Dimensions.get('screen').width/2,
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
