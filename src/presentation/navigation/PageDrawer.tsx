import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeMain from '../container/Page/PageMain/Home/HomeMain';
import Error from '../container/Page/Authentication/Error/Error';
import HomePage from '../container/ReBirthStation/HomePage/HomePage';
import PureWorld from '../container/Page/PageMain/PureWorld/PureWorld';
import CutomDrawer from '../container/Page/PageMain/CutomDrawer/CutomDrawer';
import ItemDrawer from '../component/Item/ItemDrawer';
import PureGift from '../container/Page/PageMain/PureGift/PureGift';
import PureMap from '../container/Page/PageMain/PureMap/PureMap';
import RankingTable from '../container/Page/PageMain/PureChart/PureChart';
import { AuthenticationParamList } from '../storyboard';
import { DrawerStoryBoard } from '../storyboard/DrawerStoryBoard';
import PureCoin from '../container/Page/PageMain/PureCoin/PureCoin';
import PureChart from '../container/Page/PageMain/PureChart/PureChart';

const Drawer = createDrawerNavigator<DrawerStoryBoard>();

const PageDrawer:React.FC = (props) => {
  return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          drawerActiveBackgroundColor: 'null',
        }}
        drawerContent={props => <CutomDrawer {...props} />}>
        <Drawer.Screen
          name="HomePage"
          component={HomeMain}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
        />
        <Drawer.Screen
          name="PureWorld"
          component={PureWorld}
          options={{
            drawerLabel({focused, color}) {
              return (
                <ItemDrawer
                  icon={require('../resource/images/earth.png')}
                  isFocused={focused}
                  label="Thế giới xanh"
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="PureGift"
          component={PureGift}
          options={{
            drawerLabel({focused, color}) {
              return (
                <ItemDrawer
                  icon={require('../resource/images/gift.png')}
                  isFocused={focused}
                  label="Quà tặng xanh"
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="PureMap"
          component={PureMap}
          options={{
            drawerLabel({focused, color}) {
              return (
                <ItemDrawer
                  icon={require('../resource/images/map2.png')}
                  isFocused={focused}
                  label="Bản đồ xanh"
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="PureCoin"
          component={PureCoin}
          options={{
            drawerLabel({focused, color}) {
              return (
                <ItemDrawer
                  icon={require('../resource/images/score.png')}
                  isFocused={focused}
                  label="Điểm thưởng xanh"
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="PureChart"
          component={PureChart}
          options={{
            drawerLabel({focused, color}) {
              return (
                <ItemDrawer
                  icon={require('../resource/images/rank.png')}
                  isFocused={focused}
                  label="Bảng xếp hạng"
                />
              );
            },
          }}
        />
      </Drawer.Navigator>
  );
};

export default PageDrawer;

const styles = StyleSheet.create({});
