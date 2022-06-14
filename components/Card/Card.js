import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {style} from './Card.style';

const Card = ({name, company, location, level, nav, id}) => {
  const handleOnPress = () => {
    nav.navigate('Detail', {id: id, name: name});
  };
  return (
    <TouchableHighlight onPress={handleOnPress} style={style.main}>
      <View style={style.card}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.company}>{company}</Text>
        <View style={style.locationView}>
          <Text style={style.location}>{location}</Text>
        </View>
        <View style={style.levelView}>
          <Text style={style.level}>{level}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;
