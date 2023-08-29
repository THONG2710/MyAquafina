import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../../../component/header/HeaderComponent';
import Discover from './Discover';
import Station from './Station';
import LifeCircle from './LifeCircle';
import Procedure from './Procedure';
import Footer from '../Middle/Footer';
import { AppProp } from './type';

const PureWorld:React.FC<AppProp> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <HeaderComponent headerStyle={{marginTop: 0, marginBottom: 0}} navigation={navigation}/>
      <ScrollView>
        {/* Discover */}
        <Discover />
        {/* station */}
        <Station/>
        {/* Life */}
        <LifeCircle/>
        {/* Procedure */}
        <Procedure/>
        {/* footer */}
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default PureWorld;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
});
