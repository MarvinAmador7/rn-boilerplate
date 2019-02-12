import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Linking,
  Platform,
  Keyboard,
} from 'react-native';
import SafariView from 'react-native-safari-view';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import jwt from 'jwt-decode';
import { connect } from 'react-redux';
import { ApplicationStyles, Images } from '../../Themes';
import { setFieldAction, signIn, confirmCodeIntent } from '../../Redux/Reducers/Auth';
import {
  TextCustom,
  DividerCustom,
  ButtonFacebook,
  ButtonGoogle,
  TextLink,
  TextInput,
  PrimaryButton,
} from '../../Components';

import styles from './styles';

const facebookLoginURL = `https://iqey.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=t9c0da1aqfr5eqao4h3johb2r&redirect_uri=runningman://&identity_provider=Facebook`;
const googleLoginURL = `https://iqey.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=t9c0da1aqfr5eqao4h3johb2r&redirect_uri=runningman://&identity_provider=Google`;
class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In'
  };

  componentDidMount() {
    Linking.addEventListener('url', this.eventHandler);
  }

  pressHandler = (provider) => {
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: provider === 'Facebook' ? facebookLoginURL : googleLoginURL
      });
    } else {
      InAppBrowser.open(provider === 'Facebook' ? facebookLoginURL : googleLoginURL, {
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
      });
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
    const { navigation } = this.props;
    const details = {
      grant_type: 'authorization_code',
      code,
      client_id: 't9c0da1aqfr5eqao4h3johb2r',
      redirect_uri: 'runningman://'
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
      .then(() => {
        navigation.navigate('App');
      })
      .catch((error) => {
        navigation.navigate('SignUp');
      });
  }

  eventHandler = (event) => {
    const code = (/code=([^&]+)/.test(event.url) && event.url.match(/code=([^&]+)/)[1])
    || null;
    if (!code) return;

    Platform.OS === 'ios' && SafariView.dismiss();
    Platform.OS !== 'ios' && InAppBrowser.close();

    if (
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        code
      )
    ) {
      this.getTokenbyCode(code);
    }
  };

  setEmailAction = (email) => {
    const { dispatch } = this.props;
    dispatch(setFieldAction('email', email));
  }

  setPhoneAction = (phone) => {
    const { dispatch } = this.props;
    dispatch(setFieldAction('phoneNumber', phone));
  }

  setConfirmationCodeAction = (code) => {
    const { dispatch } = this.props;
    dispatch(setFieldAction('confirmationCode', code));
  }

  signInAction = () => {
    const { dispatch } = this.props;
    dispatch(signIn());
    Keyboard.dismiss();
  }

  confirmationAction = () => {
    const { dispatch } = this.props;
    dispatch(confirmCodeIntent());
    Keyboard.dismiss();
  }

  render() {
    const {
      email,
      phone,
      pendingConfirm,
      navigation,
      confirmationCode,
    } = this.props;
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <View style={styles.container}>
          <View>
            <Image source={Images.logo} />
            <TextCustom>This is a demo tag line text</TextCustom>
          </View>

          <View style={styles.buttons}>
            <TextInput label="Email" keyboard="email-address" textChangeHandler={this.setEmailAction} value={email} />
            <TextInput
              label="Phone number"
              keyboard="number-pad"
              textChangeHandler={this.setPhoneAction}
              value={phone}
              containerStyles={{ marginBottom: 35 }}
            />
            { pendingConfirm && (
              <TextInput
                label="Confirmation Code"
                keyboard="number-pad"
                textChangeHandler={this.setConfirmationCodeAction}
                value={confirmationCode}
                containerStyles={{ marginBottom: 35 }}
              />
            )}
            <PrimaryButton title={`${pendingConfirm ? 'CONFIRM CODE' : 'LOG IN'}`} onPress={pendingConfirm ? this.confirmationAction : this.signInAction} />
            <DividerCustom>Or</DividerCustom>
            <ButtonFacebook signIn onPress={() => { this.pressHandler('Facebook'); }} />
            <ButtonGoogle signIn onPress={() => { this.pressHandler('Google'); }} />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Do not have an account yet?</Text>
              <TextLink label="Sign Up" clickHandler={() => { navigation.navigate('SignUpScreen'); }} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    pendingConfirm: auth.pendingConfirm,
    email: auth.email,
    phone: auth.phoneNumber,
    confirmationCode: auth.confirmationCode,
  };
}

export default connect(mapStateToProps)(SignInScreen);
