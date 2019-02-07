import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ApplicationStyles, Images, Metrics } from '../../Themes';
import {
  TextCustom,
  TextButton,
  DividerCustom,
  ButtonFacebook,
  ButtonGoogle,
  TextLink,
} from '../../Components';


import styles from './styles';


export default function SignUpScreen(props) {
  return (
    <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
      <View style={styles.container}>
        <View>
          <Image source={Images.logo} />
          <TextCustom>This is a demo tag line text</TextCustom>
        </View>

        <View style={styles.buttons}>
          <TextButton
            icon={
              (
                <Icon
                  name="mail"
                  size={Metrics.icons.tiny}
                  style={{ marginRight: Metrics.smallMargin }}
                />
              )}
            title="SIGN UP WITH EMAIL"
          />
          <DividerCustom>Or</DividerCustom>
          <ButtonFacebook />
          <ButtonGoogle />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TextLink label="Log In" clickHandler={() => { props.navigation.navigate('SignInScreen'); }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
