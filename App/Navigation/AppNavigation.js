import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import HomeScreen from '../Containers/Home';
import SignUpScreen from '../Containers/SignUp';
import SignUpEmailScreen from '../Containers/SignUpEmail';
import SignInScreen from '../Containers/SignIn';
import AuthLoadingScreen from '../Containers/AuthLoading';

import styles from './Styles/NavigationStyles';

const AuthStack = createStackNavigator({
  SignUpScreen: { screen: SignUpScreen },
  SignUpEmailScreen: { screen: SignUpEmailScreen },
  SignInScreen: { screen: SignInScreen },
});

const LoadingStack = createStackNavigator({
  Loading: { screen: AuthLoadingScreen },
});

const AppStack = createBottomTabNavigator({
  LaunchScreen: { screen: LaunchScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: LoadingStack,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

