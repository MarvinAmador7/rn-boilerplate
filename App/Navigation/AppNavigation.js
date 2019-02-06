import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import HomeScreen from '../Containers/Home';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createBottomTabNavigator({
  LaunchScreen: { screen: LaunchScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default createAppContainer(PrimaryNav);
