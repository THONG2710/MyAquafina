import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../../resource/values/color';
import {fonts} from '../../../../resource/values/fonts';
import ButtonImg from '../../../../component/Button/ButtonImg';
import DropDownPicker from 'react-native-dropdown-picker';
import TextFeild from '../../../../component/Input/TextFeild';
import LinearGradient from 'react-native-linear-gradient';

const ReportError = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: '1. Bỏ chai Aquafina nhưng hệ thống không nhận diện được',
      value: '1',
    },
    {label: '2. Hệ thống không tích điểm ', value: '2'},
    {label: '3. Khác', value: '3'},
  ]);

  return (
    <View style={styles.container}>
      {/* background */}
      <ImageBackground
        style={styles.backgroundAdv}
        source={require('../../../../resource/images/adv.png')}
      />
      <ImageBackground
        style={styles.backgroundCutting}
        source={require('../../../../resource/images/cuttingBig.png')}
      />

      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0.1)',
          'rgba(255, 255, 255, 0.2)',
          colors.WHITE,
          'rgba(255, 255, 255, 0.6)',
        ]}
        style={styles.gradient}></LinearGradient>

      {/* header */}
      <View style={styles.header}>
        <Pressable>
          <Image
            style={styles.header_menu}
            source={require('../../../../resource/images/menu.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.header_logo}
            source={require('../../../../resource/images/logoAquafina.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.header_logout}
            source={require('../../../../resource/images/logout.png')}
          />
        </Pressable>
      </View>

      {/* body */}
      <View style={styles.body}>
        <Text style={styles.body_title}>Nội dung báo lỗi</Text>
        <DropDownPicker
          placeholder="Nội dung báo lỗi"
          style={styles.body_drop}
          dropDownContainerStyle={styles.body_dropDown}
          listItemContainerStyle={{height: 60}}
          textStyle={{color: colors.GRAY2}}
          TickIconComponent={() => <></>}
          ArrowDownIconComponent={() => (
            <Image source={require('../../../../resource/images/down.png')} />
          )}
          ArrowUpIconComponent={() => (
            <Image source={require('../../../../resource/images/up.png')} />
          )}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TextFeild placeholder='Thông tin liên hệ ( Email/Số điện thoại )' inputViewStyle={{marginBottom: 20}}/>
        <TextFeild numberOfLines={9} multiline={true} placeholder='Mô tả lỗi' textStyle={styles.body_description}/>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <ButtonImg isButtonLight={false} text="Gửi" />
      </View>
    </View>
  );
};

export default ReportError;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },

  txt: {
    fontFamily: fonts.primaryFont,
    color: colors.BLUE,
  },

  backgroundAdv: {
    width: '80%',
    height: (Dimensions.get('screen').height / 10) * 4,
    resizeMode: 'contain',
    position: 'absolute',
    left: '20%',
    top: (Dimensions.get('screen').height / 10) * 5.5,
  },

  backgroundCutting: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    position: 'absolute',
    left: '20%',
    top: (Dimensions.get('screen').height / 10) * 6.6,
  },

  gradient: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
  },

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

  //  =================== body =======================
  body: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: Dimensions.get('screen').height/10*6.5,
    justifyContent: 'flex-start',
  },

  body_title: {
    fontSize: 24,
    color: colors.RED,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },

  body_drop: {
    width: Dimensions.get('screen').width - 32,
    marginLeft: 16,
    borderColor: colors.LIGHT_BLUE,
    borderWidth: 2,
    marginBottom: 20,
  },

  body_dropDown: {
    width: Dimensions.get('screen').width - 32,
    marginLeft: 16,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: colors.LIGHT_BLUE,
    marginTop: -2
  },

  body_description: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },

  //   ======================== footer ========================
  footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
});
