import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Linking,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import SafariView from 'react-native-safari-view';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import jwt from 'jwt-decode';

import { storage } from '../RootContainer';
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

const facebookLoginURL = `https://iqey.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=t9c0da1aqfr5eqao4h3johb2r&redirect_uri=runningman://&identity_provider=Facebook`;
const googleLoginURL = `https://iqey.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=t9c0da1aqfr5eqao4h3johb2r&redirect_uri=runningman://&identity_provider=Google`;

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  componentDidMount() {
    Linking.addEventListener('url', this.eventHandler);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.eventHandler);
  }

  pressHandler = async (provider) => {
    const url = provider === 'Facebook' ? facebookLoginURL : googleLoginURL;
    try {
      if (Platform.OS === 'ios') {
        SafariView.show({ url });
      } else {
        Linking.canOpenURL(url)
          .then((supported) => {
            if (!supported) {
              console.log("Can't handle url: " + url);
            } else {
              return Linking.openURL(url);
            }
          })
          .catch((err) => console.error('An error occurred', err));
      }
    } catch (error) {
      Linking.openURL(url);
    }
  }

  calculateClockDrift = (iatAccessToken, iatIdToken) => {
    const now = Math.floor(new Date() / 1000);
    const iat = Math.min(iatAccessToken, iatIdToken);
    return now - iat;
  };

  decodePayload = (jwtToken) => {
    try {
      return jwt(jwtToken);
    } catch (err) {
      return {};
    }
  };

  getTokenbyCode = (code) => {
    const details = {
      grant_type: 'authorization_code',
      code,
      client_id: 't9c0da1aqfr5eqao4h3johb2r',
      redirect_uri: 'runningman://'
      // <-- Alex I think the problem is here  android doesn't understand
      // how to handle this redirect uri  or works very different than ios
      // When you try to run the facebook login for the first time it works
      // you can see the facebook sign in screen but then the browser doesn't
      // how to come back to the app so it gets spining forever
      // https://facebook.github.io/react-native/docs/linking
      // https://github.com/proyecto26/react-native-inappbrowser#authentication-flow-using-deep-linking
      // https://stackoverflow.com/questions/39987847/android-scheme-url-link-redirect-to-app
      // https://android.jlelse.eu/deep-linking-in-androd-9c853573fdf4
    };

    const formBody = Object.keys(details)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`
      )
      .join('&');

    fetch(
      'https://iqey.auth.us-east-1.amazoncognito.com/oauth2/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      }
    )
      .then((res) => {
        const { navigation } = this.props;
        const creds = JSON.parse(res._bodyInit);
        const idTokenData = this.decodePayload(creds['id_token']);
        const accessTokenData = this.decodePayload(creds['access_token']);

        storage.setItem('CognitoIdentityServiceProvider.t9c0da1aqfr5eqao4h3johb2r.LastAuthUser', idTokenData['cognito:username'])
        storage.setItem(`CognitoIdentityServiceProvider.t9c0da1aqfr5eqao4h3johb2r.${idTokenData['cognito:username']}.idToken`, creds['id_token'])
        storage.setItem(`CognitoIdentityServiceProvider.t9c0da1aqfr5eqao4h3johb2r.${idTokenData['cognito:username']}.accessToken`, creds['access_token'])
        storage.setItem(`CognitoIdentityServiceProvider.t9c0da1aqfr5eqao4h3johb2r.${idTokenData['cognito:username']}.refreshToken`, creds['refresh_token'])
        storage.setItem(`CognitoIdentityServiceProvider.t9c0da1aqfr5eqao4h3johb2r.${idTokenData['cognito:username']}.clockDrift`, '' + this.calculateClockDrift(accessTokenData['iat'], idTokenData['iat']) + '');

        if (Platform.OS === 'ios') {
          SafariView.dismiss();
        } else {
          InAppBrowser.close();
        }

        navigation.navigate('App');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  eventHandler = (event) => {
    const code = (/code=([^&]+)/.test(event.url) && event.url.match(/code=([^&]+)/)[1])
    || null;
    console.log('no code', code);
    if (!code) return;

    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    } else {
      InAppBrowser.close();
    }


    if (
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        code
      )
    ) {
      console.log('decode token', code);
      this.getTokenbyCode(code);
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <View style={styles.container}>
          <View>
            <Image source={Images.logo} />
            <TextCustom>This is a demo tag line text</TextCustom>
          </View>

          <View style={styles.buttons}>
            <TextButton
              onPress={() => { navigation.navigate('SignUpEmailScreen'); }}
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
            <ButtonFacebook onPress={() => { this.pressHandler('Facebook'); }} />
            <ButtonGoogle onPress={() => { this.pressHandler('Google'); }} />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TextLink label="Log In" clickHandler={() => { navigation.navigate('SignInScreen'); }} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(null)(SignUpScreen);
