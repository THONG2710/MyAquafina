import {
  ScrollView,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../resource/values/color';
import { fonts } from '../../resource/values/fonts';

export interface GroupButtonProp extends TextProps {
  buttons: string[];
  onChangeButton: (item: any) => void;
}

const GroupButton: React.FC<GroupButtonProp> = props => {
  const {buttons, onChangeButton} = props;
  const [clickID, setClickID] = useState(0);
  const handleClick = (item: any, id: number) => {
    setClickID(id);
    onChangeButton(item);
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {buttons.map((item, index) => {
          return (
            <TouchableOpacity
                onPress={() => handleClick(item, index)}
              key={index}
              style={index === clickID ? styles.buttonActive : styles.button}>
              <Text style={index === clickID ? styles.textActive : styles.text}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default GroupButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '7%',
    marginTop: 20,
  },

  button: {
    borderWidth: 2,
    borderColor: colors.WHITE,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    height: 35,
  },

  buttonActive: {
    backgroundColor: colors.WHITE,
    borderWidth: 2,
    borderColor: colors.BLUE,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    height: 35,
  },

  text: {
    fontFamily: fonts.primaryFont,
    fontSize: 12,
    color: colors.WHITE,
    paddingHorizontal: 10,
  },

  textActive: {
    color: colors.BLUE,
    fontFamily: fonts.primaryFont,
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
