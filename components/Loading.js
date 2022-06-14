import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../assets/96916-searching.json')}
      autoPlay
    />
  );
};

export default Loading;
