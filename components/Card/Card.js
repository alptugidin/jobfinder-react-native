import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {style} from './Card.style';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../colors';
import {useDispatch} from 'react-redux';
import {remove} from '../../stores/favList';
const Card = ({name, company, location, level, nav, id, contents, contact}) => {
  const jobDetails = {
    name,
    company,
    location,
    level,
    id,
    contents,
    contact,
  };

  const route = useRoute();
  const dispatch = useDispatch();
  const handleOnPress = () => {
    if (route.name === 'FavoritesScreen') {
      nav.navigate('FavDetailsScreen', jobDetails);
    } else {
      nav.navigate('DetailScreen', jobDetails);
    }
  };

  const removeFromFav = () => {
    dispatch(remove(id));
  };
  return (
    <TouchableHighlight onPress={handleOnPress} style={style.main}>
      <View style={style.card}>
        <Text numberOfLines={1} e style={style.name}>
          {name}
        </Text>
        <Text style={style.company}>{company}</Text>
        <View style={style.locationView}>
          <Text style={style.location}>{location}</Text>
        </View>
        <View style={style.levelView}>
          <Text style={style.level}>{level}</Text>
        </View>

        {route.name === 'FavoritesScreen' && (
          <View style={style.removeView}>
            <Icon.Button
              onPress={removeFromFav}
              name="trash-can-outline"
              color="white"
              backgroundColor={colors.red500}
              style={style.iconButton}
              size={20}>
              Remove
            </Icon.Button>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Card;
