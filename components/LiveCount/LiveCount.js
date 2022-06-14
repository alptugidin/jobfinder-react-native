import React from 'react';
import {Text, View} from 'react-native';
import {style} from './LiveCount.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const Counter = ({iconName, jobCounter, favCounter}) => {
  if (iconName === 'briefcase-eye' || iconName === 'briefcase-eye-outline') {
    return <Text style={style.counter}>{jobCounter}</Text>;
  } else if (iconName === 'heart' || iconName === 'heart-outline') {
    return <Text style={style.counter}>{favCounter}</Text>;
  }
};

const LiveCount = ({iconName, color, size}) => {
  const jobCounter = useSelector(state => state.favList.jobsCount);
  const favCounter = useSelector(state => state.favList.list.length);
  return (
    <View style={style.main}>
      <Icon name={iconName} size={size} color={color} />
      <View style={style.textView}>
        <Counter
          iconName={iconName}
          jobCounter={jobCounter}
          favCounter={favCounter}
        />
      </View>
    </View>
  );
};

export default LiveCount;
