import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {fonts} from '../../../../resource/values/fonts';
import {colors} from '../../../../resource/values/color';
import Modal from 'react-native-modal';
import PopupOnLogin from '../../../../component/Popup/PopupOnLogin';

const CutomDrawer: React.FC<any> = props => {
  const {navigation} = props;
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal>
        <PopupOnLogin/>
      </Modal>
      {/* header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.closeDrawer()}>
          <Image
            style={styles.header_btnX}
            source={require('../../../../resource/images/x2.png')}
          />
        </Pressable>
        <Image
          style={styles.header_logo}    
          source={require('../../../../resource/images/logoAquafina.png')}
        />
        <View></View>
      </View>
      {/* information */}
      <View style={styles.information}>
        <Image
          style={styles.information_avatar}
          source={require('../../../../resource/images/avatar3.png')}
        />
        <Text style={styles.information_txtName}>Lê Quỳnh Ái Vân</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/* footer */}
      <View style={styles.footer}>
        <Pressable style={styles.footer_btnLogout}>
          <Image style={styles.footer_img} source={require('../../../../resource/images/logout.png')} />
          <Text style={styles.footer_text}>Sign out</Text>
        </Pressable>
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
    width: '50%',
    height: 50,
    resizeMode: 'contain',
  },

  header_btnX: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  //   ================== information =================
  information: {
    width: '100%',
    marginLeft: 20,
    marginVertical: 20,
  },

  information_avatar: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },

  information_txtName: {
    fontFamily: fonts.primaryFont,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.BLACK,
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
