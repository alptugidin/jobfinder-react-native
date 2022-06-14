import React from 'react';
import {Text, View} from 'react-native';
import {style} from '../SubmitButton/SubmitButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoriteButton = ({title, onPress}) => {
  return (
    <Icon.Button name="heart" style={style.button} onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </Icon.Button>
  );
};

export default FavoriteButton;
