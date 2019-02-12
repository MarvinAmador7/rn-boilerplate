import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { ApplicationStyles, Images } from '../../Themes';
import { setFieldAction, signUp } from '../../Redux/Reducers/Auth';
import {
  TextCustom,
  TextLink,
  TextInput,
  PrimaryButton,
} from '../../Components';

import styles from './styles';

class SignUpEmailScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up Detials'
  };

  setEmailAction = (email) => {
    const { dispatch } = this.props;
    dispatch(setFieldAction('email', email));
  }

  signUpAction = () => {
    const { dispatch } = this.props;
    dispatch(signUp());
  }

  // function setPhoneAction(phone) {
  //   const { dispatch } = props;
  //   dispatch(setFieldAction('phoneNumber', phone));
  // }

  render() {
    const { email, navigation } = this.props;
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
          >
            <View>
              <Image source={Images.logo} />
              <TextCustom>This is a demo tag line text</TextCustom>
            </View>

            <View style={styles.buttons}>
              <TextInput
                clearButtonMode="while-editing"
                autoFocus
                label="Email"
                keyboard="email-address"
                textChangeHandler={this.setEmailAction}
                value={email}
                containerStyles={{ marginBottom: 35 }}
              />
              {/* <TextInput
                label="Phone number"
                keyboard="number-pad"
                textChangeHandler={this.setPhoneAction}
                value={phone}
                containerStyles={{ marginBottom: 35 }}
              /> */}
              <PrimaryButton title="SIGN UP" onPress={this.signUpAction} />
              <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TextLink label="Log In" clickHandler={() => { navigation.navigate('SignInScreen'); }} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    email: auth.email,
    phone: auth.phoneNumber,
  };
}

export default connect(mapStateToProps)(SignUpEmailScreen);
