import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { ApplicationStyles, Images } from '../../Themes';
import { setFieldAction } from '../../Redux/Reducers/Auth';
import {
  TextCustom,
  TextLink,
  TextInput,
  PrimaryButton,
} from '../../Components';

import styles from './styles';

function SignUpEmailScreen(props) {
  function setEmailAction(email) {
    const { dispatch } = props;
    dispatch(setFieldAction('email', email));
  }

  function setPhoneAction(phone) {
    const { dispatch } = props;
    dispatch(setFieldAction('phoneNumber', phone));
  }

  const { email, phone } = props;

  return (
    <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
      <View style={styles.container}>
        <View>
          <Image source={Images.logo} />
          <TextCustom>This is a demo tag line text</TextCustom>
        </View>

        <View style={styles.buttons}>
          <TextInput label="Email" keyboard="email-address" textChangeHandler={setEmailAction} value={email} />
          <TextInput
            label="Phone number"
            keyboard="number-pad"
            textChangeHandler={setPhoneAction}
            value={phone}
            containerStyles={{ marginBottom: 35 }}
          />
          <PrimaryButton title="SIGN UP" />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TextLink label="Log In" clickHandler={() => { props.navigation.navigate('SignInScreen'); }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function mapStateToProps({ auth }) {
  return {
    email: auth.email,
    phone: auth.phoneNumber,
  };
}

export default connect(mapStateToProps)(SignUpEmailScreen);
