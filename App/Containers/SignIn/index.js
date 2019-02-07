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
  DividerCustom,
  ButtonFacebook,
  ButtonGoogle,
  TextLink,
  TextInput,
  PrimaryButton,
} from '../../Components';


import styles from './styles';


function SignInScreen(props) {
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
          <PrimaryButton title="LOG IN" />
          <DividerCustom>Or</DividerCustom>
          <ButtonFacebook signIn />
          <ButtonGoogle signIn />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Do not have an account yet?</Text>
            <TextLink label="Sign Up" clickHandler={() => { props.navigation.navigate('SignUpScreen'); }} />
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

export default connect(mapStateToProps)(SignInScreen);
