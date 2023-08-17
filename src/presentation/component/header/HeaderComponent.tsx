import { Dimensions, Image, Pressable, StyleProp, StyleSheet, Text, TextProps, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../resource/values/color'

export interface HeaderComponentProps extends TextProps {
  headerStyle?: StyleProp<ViewStyle>;
}

const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const {headerStyle} = props;
  return (
    <View style={[styles.header, headerStyle]}>
        <Pressable>
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
        <Pressable>
          <Image
            style={styles.header_logout}
            source={require('../../resource/images/logout.png')}
          />
        </Pressable>
      </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    // ================ header =================
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
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
})