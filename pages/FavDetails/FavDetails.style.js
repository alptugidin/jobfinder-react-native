import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerView: {
    backgroundColor: colors.gray100,
    borderWidth: 1,
    borderColor: colors.gray200,
    paddingHorizontal: 5,
  },

  header: {
    paddingTop: 5,
    fontSize: 20,
    color: colors.gray600,
    fontWeight: 'bold',
  },

  locationView: {
    flexDirection: 'row',
    paddingVertical: 5,
  },

  locationLabel: {
    color: colors.red500,
    fontSize: 15,
    fontWeight: 'bold',
  },

  locationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.gray600,
  },

  levelView: {
    paddingVertical: 5,
    flexDirection: 'row',
  },

  levelLabel: {
    color: colors.red500,
    fontSize: 15,
    fontWeight: 'bold',
  },

  levelText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.gray600,
  },

  jobDetail: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray600,
  },

  htmlView: {
    padding: 10,
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
