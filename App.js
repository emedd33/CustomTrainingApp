import 'react-native-gesture-handler';
import React, { Image } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage/HomePage';
import HeaderBar from './src/components/Molecules/HeaderBar';
import Colors from './src/assets/Colors/Colors';
import HeaderbarStyle from './src/assets/styles/HeaderBarStyle';


const Stack = createStackNavigator();

function App() {
  return (
    <HomePage />
  );
}

export default App;