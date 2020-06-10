import React from 'react';
import LottieView from 'lottie-react-native';

export default class SplashScreen extends React.Component {
  render() {
    return <LottieView source={require('../../assets/4877-electric-guitar-music.json')} autoPlay loop />;
  }
}

const styles = StyleSheet.create({});
  