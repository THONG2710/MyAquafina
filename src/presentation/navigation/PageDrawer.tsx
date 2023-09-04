import {Alert, StyleSheet, Text, View} from 'react-native';
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
import {AuthenticationParamList} from '../storyboard';
import {DrawerStoryBoard} from '../storyboard/DrawerStoryBoard';
import PureCoin from '../container/Page/PageMain/PureCoin/PureCoin';
import PureChart from '../container/Page/PageMain/PureChart/PureChart';
import {useAppDispatch, useAppSelector} from '../shared-state/Redux/Hook/Hook';
import ReactNativeModal from 'react-native-modal';
import PopupOnLogin from '../component/Popup/PopupOnLogin';
import ProgarmLures from '../container/Page/PageMain/PureGift/ProgarmLures';
import ReportError from '../container/Page/Authentication/ReportError/ReportError';
import { showModalLogin } from '../shared-state/Redux/Actions/AuthenticationActions';
import { earth, gift, map2, rank, score } from '../resource/images';

const Drawer = createDrawerNavigator<DrawerStoryBoard>();

const PageDrawer: React.FC = props => {
  const isLogged = useAppSelector(state => state.authentication.isLogged);
  const dispatch = useAppDispatch();

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
                icon={ earth}
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
                icon={ gift}
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
                icon={ map2}
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
        listeners={{
          drawerItemPress: ({}) => {
            isLogged ? null : dispatch(showModalLogin(true));
          },
        }}
        options={{
          drawerLabel({focused, color}) {
            return (
              <ItemDrawer
                icon={ score}
                isFocused={focused}
                label="Điểm thưởng xanh"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="PureChart"
        listeners={{
          drawerItemPress: ({}) => {
            isLogged ? null : dispatch(showModalLogin(true));
          },
        }}
        component={PureChart}
        options={{
          drawerLabel({focused, color}) {
            return (
              <ItemDrawer
                icon={ rank}
                isFocused={focused}
                label="Bảng xếp hạng"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="ProgarmLures"
        component={ProgarmLures}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
      <Drawer.Screen
        name="ReportError"
        component={ReportError}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
};

export default PageDrawer;

const styles = StyleSheet.create({});
