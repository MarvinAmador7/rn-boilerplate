import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import HomeScreen from '../Containers/Home';
import SignUpScreen from '../Containers/SignUp';
import SignInScreen from '../Containers/SignIn';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createBottomTabNavigator({
  LaunchScreen: { screen: LaunchScreen },
  SignUpScreen: { screen: SignUpScreen },
  SignInScreen: { screen: SignInScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SignUpScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default createAppContainer(PrimaryNav);
