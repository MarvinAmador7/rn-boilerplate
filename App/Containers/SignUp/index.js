import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
} from 'react-native';
import { ApplicationStyles, Images } from '../../Themes';
import { TextCustom } from '../../Components';


import styles from './styles';


export default function SignUpScreen() {
  return (
    <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
      <View style={styles.container}>
        <View>
          <Image source={Images.logo} />
          <TextCustom>This is a demo tag line text</TextCustom>
        </View>
      </View>
    </SafeAreaView>
  );
}
