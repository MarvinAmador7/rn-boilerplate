import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 20,
    marginVertical: 35,
  },
  innerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    color: Colors.darkBlue,
  },
  divider: {
    width: '70%',
    height: 2,
    backgroundColor: Colors.lightGrey,
  },
});
