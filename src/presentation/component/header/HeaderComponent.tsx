import {
  Dimensions,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../resource/values/color';
import PopupConfirmLogout from '../Popup/PopupConfirmLogout';
import Modal from 'react-native-modal';
import {useAppDispatch, useAppSelector} from '../../shared-state/Redux/Hook/Hook';
import { Login, showModalLogin } from '../../shared-state/Redux/Actions/AuthenticationActions';
import { fetchLogin } from '../../shared-state/Redux/Thunks/LoginThunk';
import { LoginReducer, resetUser } from '../../shared-state/Redux/Reducers/LoginReducer';
import { logoAquafina, logout, menu } from '../../resource/images';

export interface HeaderComponentProps extends TextProps {
  headerStyle?: StyleProp<ViewStyle>;
  navigation: any;
}

const HeaderComponent: React.FC<HeaderComponentProps> = props => {
  const {headerStyle, navigation} = props;
  const [isVisible, setIsVisible] = useState(false);
  const isLogged = useAppSelector(state => state.authentication.isLogged);
  const dispatch = useAppDispatch();

  const onToggleModal = () => {
    isLogged
      ? setIsVisible(!isVisible)
      : navigation.replace('AuthenticationStack');
  };

  const handleLogout = () => {
    dispatch(Login(false));
    dispatch(resetUser())
    setIsVisible(!isVisible);
  }

  return (
    <View style={[styles.header, headerStyle]}>
      <Modal isVisible={isVisible}>
        <PopupConfirmLogout onPress={onToggleModal} onPressLogout={handleLogout}/>
      </Modal>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.header_menu}
          source={{uri: menu}}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('HomePage')}>
        <Image
          style={styles.header_logo}
          source={{uri: logoAquafina}}
        />
      </Pressable>
      <Pressable onPress={onToggleModal}>
        <Image
          style={styles.header_logout}
          source={{uri: logout}}
        />
      </Pressable>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  // ================ header =================
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.WHITE,
  },

  header_menu: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 20,
  },

  header_logo: {
    width: Dimensions.get('screen').width / 3,
    height: 50,
    resizeMode: 'contain',
  },

  header_logout: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 20,
  },
});
