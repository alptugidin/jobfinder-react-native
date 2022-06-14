import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../assets/6226-nodata.json')}
      autoPlay
    />
  );
};

export default Loading;
