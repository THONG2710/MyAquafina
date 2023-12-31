import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import {FlatList} from 'react-native';
import ItemChart from '../../../../component/Item/ItemChart';
import {ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../../shared-state/Redux/Hook/Hook';
import ItemMyRank from '../../../../component/Item/ItemMyRank';
import ButtonImg from '../../../../component/Button/ButtonImg';
import { fetchUsers } from '../../../../shared-state/Redux/Thunks/GetUsersThunks';
import * as Progress from 'react-native-progress';
import { bottleAqualeft, bottleOtherRight, map, ripple, strokeAqua } from '../../../../resource/images';

export interface ChartsProp extends TextProps {
  navigation?: any;
}

const Charts: React.FC<ChartsProp> = props => {
  const {navigation} = props;
  const isLogged = useAppSelector(state => state.authentication.isLogged);
  const dispatch = useAppDispatch();
  const lisUsers = useAppSelector((state) => state.UsersReduer.listUsers);
  const user = useAppSelector((state) => state.LoginReducer.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Background Header */}
        <Image
          style={styles.header_BackgroundStroke}
          source={{uri: strokeAqua}}
        />

        <Text style={styles.header_title}>Tổng số chai nhựa thu được</Text>
        {/* body header */}
        <View style={styles.header_body}>
          {/* Background */}
          <Image
            style={styles.header_BackgroundMap}
            source={{uri: map}}
          />
          <View style={styles.header_boxInfor}>
            <Image
              style={styles.header_bottleLeft}
              source={{uri: bottleAqualeft}}
            />
            <Text style={styles.header_txtQuantity}>200.000</Text>
            <Text style={styles.header_txtBottleName}>Chai AQUAFINA</Text>
          </View>
          <View style={styles.header_boxInfor}>
            <Image
              style={styles.header_bottleRight}
              source={{uri: bottleOtherRight}}
            />
            <Text style={styles.header_txtQuantity}>100.000</Text>
            <Text style={styles.header_txtBottleName}>Chai khác</Text>
          </View>
        </View>
      </View>
      {/* Charts */}
      <View style={styles.charts}>
        <Image
          style={styles.chart_background}
          source={{uri: ripple}}
        />
        <Text style={styles.chart_title}>Bảng xếp hạng </Text>
        <Text style={styles.chart_txtTime}>13/06/2022 - 19/06/2022</Text>
        <View style={styles.chart_table}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {lisUsers.map((item, index) => {
              return <ItemChart data={item} places={index + 1}  key={item.id} />;
            })}
          </ScrollView>
        </View>
        {/* footer */}
        {isLogged ? (
          <View style={styles.chart_footer}>
            <Text style={styles.chart_note}>Hạng của tôi</Text>
            <ItemMyRank user={user}/>
            <ButtonImg
              btnStyle={{width: Dimensions.get('screen').width - 80}}
              isButtonLight={true}
              text="Xem chi tiết"
              onPress={() => navigation.navigate('PureChart')}
            />
          </View>
        ) : (
          <View style={styles.chart_footer}>
            <Text style={styles.chart_note}>
              Vui lòng đăng nhập để xem hạng của bạn
            </Text>
            <ButtonImg
              isButtonLight={true}
              text="Đăng nhập"
              onPress={() => navigation.navigate('AuthenticationStack')}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 8,
    backgroundColor: 'red',
  },

  // =================== header =================
  header: {
    width: '100%',
    height: '30%',
    backgroundColor: colors.LIGHT_6_BLUE,
  },

  header_BackgroundStroke: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '20%',
  },

  header_title: {
    color: colors.WHITE,
    backgroundColor: colors.BLUE,
    borderRadius: 5,
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: fonts.primaryFont,
    width: Dimensions.get('screen').width - 130,
    marginLeft: 65,
    marginBottom: -17,
    zIndex: 1,
    marginTop: 20,
  },

  // =================== header body =================
  header_body: {
    borderWidth: 2,
    width: Dimensions.get('screen').width - 32,
    marginLeft: 16,
    borderRadius: 10,
    borderColor: colors.BLUE,
    height: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  header_BackgroundMap: {
    position: 'absolute',
  },

  header_boxInfor: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    width: '40%',
    height: '50%',
    borderRadius: 10,
    borderColor: colors.BLUE,
    borderWidth: 2,
    borderStyle: 'dashed',
  },

  header_bottleLeft: {
    position: 'absolute',
    zIndex: 1,
    left: -25,
    height: 80,
    width: 50,
    resizeMode: 'contain',
  },

  header_bottleRight: {
    position: 'absolute',
    zIndex: 1,
    right: -25,
    height: 80,
    width: 50,
    resizeMode: 'contain',
  },

  header_txtQuantity: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: '700',
    color: colors.LIGHT_2_BLUE,
  },

  header_txtBottleName: {
    fontFamily: fonts.primaryFont,
    fontSize: 12,
    fontWeight: '400',
    color: colors.LIGHT_2_BLUE,
  },

  // =================== charts ==================
  charts: {
    width: '100%',
    height: '70%',
    backgroundColor: colors.BLUE,
  },

  chart_background: {
    position: 'absolute',
    width: 300,
    height: 300,
    resizeMode: 'contain',
    top: 60,
    left: -160,
  },

  chart_title: {
    width: Dimensions.get('screen').width - 230,
    marginLeft: 115,
    backgroundColor: colors.LIGHT_3_BLUE,
    borderRadius: 5,
    paddingVertical: 5,
    textAlign: 'center',
    color: colors.WHITE,
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: -15,
  },

  chart_txtTime: {
    fontFamily: fonts.primaryFont,
    fontSize: 12,
    color: colors.WHITE,
    width: Dimensions.get('screen').width - 180,
    marginLeft: 90,
    textAlign: 'center',
    marginVertical: 10,
  },

  chart_table: {
    height: 230,
    overflow: 'hidden',
  },

  chart_footer: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
  },

  chart_note: {
    color: colors.WHITE,
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
