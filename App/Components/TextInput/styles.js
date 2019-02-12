import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 4,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    width: '100%',
    ...Platform.select({
      ios: {
        height: 58,
      },
      android: {
        height: 82,
      },
    }),
    padding: Metrics.baseMargin,
    marginBottom: Metrics.marginVertical,
  },
  input: {
    ...Fonts.style.input,
    ...Platform.select({
      ios: {
        marginTop: 4,
      },
      android: {
        marginTop: 2,
      },
    }),
    backgroundColor: Colors.white,
    width: '100%',
  },
  label: {
    ...Fonts.style.label,
    color: Colors.lightBlue,
  },
});
