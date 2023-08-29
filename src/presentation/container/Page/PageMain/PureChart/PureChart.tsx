import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import {PureChartProp} from './type';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import ButtonImg from '../../../../component/Button/ButtonImg';
import ItemChart from '../../../../component/Item/ItemChart';
import GroupButton from '../../../../component/Button/GroupButton';
import ItemMyRank from '../../../../component/Item/ItemMyRank';
import Footer from '../Middle/Footer';

const list = [
  {_id: 1},
  {_id: 2},
  {_id: 3},
  {_id: 4},
  {_id: 5},
  {_id: 6},
  {_id: 7},
  {_id: 8},
  {_id: 9},
  {_id: 10},
];

const list2 = [
  '06/2022 Tuần 1',
  '06/2022 Tuần 2',
  '06/2022 Tuần 3',
  '06/2022 Tuần 4',
  '06/2022 Tuần 5',
  '06/2022 Tuần 6',
];

const PureChart: React.FC<PureChartProp> = props => {
  const {navigation} = props;
  const handleClickButton = (item: any) => {
    console.log(item);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <ScrollView>
        <View style={styles.charts}>
          <Image
            style={styles.chart_background}
            source={require('../../../../resource/images/ripple.png')}
          />
          <Text style={styles.chart_title}>Bảng xếp hạng </Text>
          <GroupButton buttons={list2} onChangeButton={handleClickButton} />
          <View style={styles.chart_table}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {list.map((item, index) => {
                return <ItemChart places={index + 1} key={item._id} />;
              })}
            </ScrollView>
          </View>
          <View style={styles.chart_footer}>
            <Text style={styles.chart_note}>Hạng của tôi</Text>
            <ItemMyRank />
          </View>
        </View>
        {/* footer */}
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default PureChart;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  // =================== charts ==================
  charts: {
    width: '100%',
    height: Dimensions.get('screen').height - 150,
    backgroundColor: colors.BLUE,
    marginTop: 30,
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
    height: Dimensions.get('screen').height / 2 + 60,
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
