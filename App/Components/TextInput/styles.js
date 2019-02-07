import { StyleSheet } from 'react-native';
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
    height: 58,
    padding: Metrics.baseMargin,
    marginBottom: Metrics.marginVertical,
  },
  input: {
    ...Fonts.style.input,
    backgroundColor: Colors.white,
    width: '100%',
    marginTop: 4,
  },
  label: {
    ...Fonts.style.label,
    color: Colors.lightBlue,
  },
});
