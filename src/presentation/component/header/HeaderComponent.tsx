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
import React, {useState} from 'react';
import {colors} from '../../resource/values/color';
import PopupConfirmLogout from '../Popup/PopupConfirmLogout';
import Modal from 'react-native-modal';

export interface HeaderComponentProps extends TextProps {
  headerStyle?: StyleProp<ViewStyle>;
  navigation: any;
}

const HeaderComponent: React.FC<HeaderComponentProps> = props => {
  const {headerStyle, navigation, } = props;
  const [isVisible, setIsVisible] = useState(false);
  const onToggleModal = () => {
    setIsVisible(!isVisible);
  }

  return (
    <View style={[styles.header, headerStyle]}>
      <Modal isVisible={isVisible}>
        <PopupConfirmLogout onPress={onToggleModal}/>
      </Modal>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.header_menu}
          source={require('../../resource/images/menu.png')}
        />
      </Pressable>
      <Pressable>
        <Image
          style={styles.header_logo}
          source={require('../../resource/images/logoAquafina.png')}
        />
      </Pressable>
      <Pressable onPress={onToggleModal}>
        <Image
          style={styles.header_logout}
          source={require('../../resource/images/logout.png')}
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
