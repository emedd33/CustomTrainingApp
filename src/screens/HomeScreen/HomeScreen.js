import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
const HomeScreen = ({ navigation }) => {
  const image = require("../../assets/images/profile_background.png");

  return (
    <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>
    </ImageBackground>
  );
}

export default HomeScreen