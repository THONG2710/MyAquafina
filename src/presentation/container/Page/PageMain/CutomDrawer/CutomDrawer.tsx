import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {fonts} from '../../../../resource/values/fonts';
import {colors} from '../../../../resource/values/color';
import Modal, { ReactNativeModal } from 'react-native-modal';
import PopupOnLogin from '../../../../component/Popup/PopupOnLogin';
import {useAppDispatch, useAppSelector} from '../../../../shared-state/Redux/Hook/Hook';
import PopupConfirmLogout from '../../../../component/Popup/PopupConfirmLogout';
import { resetUser } from '../../../../shared-state/Redux/Reducers/LoginReducer';
import { Login } from '../../../../shared-state/Redux/Actions/AuthenticationActions';

const CutomDrawer: React.FC<any> = props => {
  const {navigation} = props;
  const isLogged = useAppSelector(state => state.authentication.isLogged);
  const [showPopup, setShowPopup] = useState(false);
  const user = useAppSelector((state) => state.LoginReducer.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    if (isLogged) {
      navigation.closeDrawer();
      setShowPopup(true);
    } else {
      navigation.replace('AuthenticationStack');
      setShowPopup(false);
    }
  }

  const Logout = () => {
    dispatch(resetUser());
    dispatch(Login(false))
    setShowPopup(false);
  }

  return (
    <View style={styles.container}>
      <Modal isVisible={showPopup}>
        <PopupConfirmLogout onPress={() => setShowPopup(false)} onPressLogout={Logout}/>
      </Modal>
      {/* header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.closeDrawer()}>
          <Image
            style={styles.header_btnX}
            source={require('../../../../resource/images/x2.png')}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('HomePage')}>
          <Image
            style={styles.header_logo}
            source={require('../../../../resource/images/logoAquafina.png')}
          />
        </Pressable>
        <View></View>
      </View>
      {/* information */}
      {isLogged ? (
        <View style={styles.information}>
          <Image
            style={styles.information_avatar}
            source={{uri: user.avatar}}
          />
          <Text style={styles.information_txtName}>{user.name}</Text>
        </View>
      ) : (
        <View style={styles.information}>
          <Image
            style={styles.information_avatar}
            source={require('../../../../resource/images/avatarDefault.png')}
          />
          <Text style={styles.information_txtName2}>User is not sign in</Text>
        </View>
      )}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footer_btnLogout} onPress={handleLogout}>
          <Image
            style={styles.footer_img}
            source={require('../../../../resource/images/logout.png')}
          />
          <Text style={styles.footer_text}>{isLogged ? 'Sign out' : 'Sign in'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CutomDrawer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  // ================= header =================
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  header_logo: {
    width: 140,
    height: 50,
    resizeMode: 'contain',
    marginRight: 30,
  },

  header_btnX: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  //   ================== information  =================
  information: {
    width: '100%',
    marginLeft: 20,
    marginVertical: 20,
  },

  information_avatar: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 20,
  },

  information_txtName: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginVertical: 5,
  },

  information_txtName2: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    color: colors.GRAY,
    marginVertical: 5,
  },

  //  ================= footer =================
  footer: {
    width: '100%',
    justifyContent: 'center',
    height: 70,
    paddingLeft: 10,
    borderTopColor: colors.GRAY2,
    borderTopWidth: 1,
  },

  footer_btnLogout: {
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 12,
  },

  footer_img: {
    width: 30,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
    marginRight: 10,
  },

  footer_text: {
    fontFamily: fonts.primaryFont,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLUE,
  },
});
