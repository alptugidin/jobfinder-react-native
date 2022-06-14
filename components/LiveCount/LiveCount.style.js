import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const style = StyleSheet.create({
  main: {},

  textView: {
    position: 'absolute',
    right: -10,
    top: -6,
    minWidth: 24,
    backgroundColor: colors.red600,
    borderRadius: 20,
    padding: 2,
    borderWidth: 2,
    borderColor: 'white',
  },

  counter: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
