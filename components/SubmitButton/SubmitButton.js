import React from 'react';
import {Text} from 'react-native';
import {style} from './SubmitButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SubmitButton = ({title, onPress, icon}) => {
  return (
    <Icon.Button name={icon} style={style.button} onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </Icon.Button>
  );
};

export default SubmitButton;
