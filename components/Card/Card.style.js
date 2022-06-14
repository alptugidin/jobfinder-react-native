import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const style = StyleSheet.create({
  main: {
    height: 130,
    borderRadius: 10,
  },

  card: {
    padding: 5,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray500,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.gray900,
  },

  company: {
    fontSize: 15,
    color: colors.gray900,
  },

  locationView: {
    flexDirection: 'row',
    marginTop: 5,
  },

  location: {
    backgroundColor: colors.red500,
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 1,
    fontSize: 15,
  },

  levelView: {
    position: 'absolute',
    right: 6,
    bottom: 6,
  },

  level: {
    color: colors.red500,
    fontWeight: 'bold',
  },
});
