import { Dimensions, Image, StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../../resource/values/color'
import { fonts } from '../../../../../resource/values/fonts'
import ButtonImg from '../../../../../component/Button/ButtonImg'
import { BannersProp } from './Banners'
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler'

const Banner3:React.FC<BannersProp> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.header_title}>
          Khám phá{' '}
          <Text style={styles.header_titleHighlight}>vòng tròn biểu tượng</Text>
        </Text>
        <Image
          style={styles.header_imgRipple}
          source={require('../../../../../resource/images/title.png')}
        />
      </View>
      {/* body */}
      <View style={styles.body}>
        <Image
          style={styles.body_imgRipple}
          source={require('../../../../../resource/images/rippleGradient.png')}
        />
        <Image
          style={styles.body_imgBottle}
          source={require('../../../../../resource/images/bigBottleAquafina.png')}
        />
      </View>
      <View style={styles.footer}>
        <ButtonImg btnStyle={styles.btnMore} text='Tìm hiểu thêm' onPress={() => navigation.navigate('PureWorld')}/>
      </View>
    </View>
  )
}

export default Banner3

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.LIGHT_5_BLUE,
        height: Dimensions.get('screen').height/10*7.5,
      },
      // ======================== header ========================
      header: {
        width: '100%',
        height: Dimensions.get('screen').height/10+60,
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 30,
      },
    
      header_title: {
        fontFamily: fonts.primaryFont,
        fontSize: 18,
        fontWeight: '400',
        color: colors.BLUE,
      },
    
      header_titleHighlight: {
        fontWeight: 'bold',
      },
    
      header_imgRipple: {
        width: 150,
        height: 110,
        resizeMode: 'contain',
      },
    
      // ======================== body ========================
      body: {
        width: '100%',
        height: Dimensions.get('screen').height/10*4,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      body_imgRipple: {
        position: 'absolute',
        width: '90%',
        height: '80%',
        resizeMode: 'contain',
      },
    
      body_imgBottle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },

    //   ============== footer =============================
    footer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },

    btnMore: {
        width: Dimensions.get('screen').width/2,
    }
})