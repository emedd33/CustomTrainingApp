import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RoutineScreen from './src/screens/RoutineScreen/RoutineScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkoutScreen from './src/screens/WorkoutScreen/WorkoutScreen';

const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Routines" component={RoutineScreen} />
        <Drawer.Screen name="Workouts" component={WorkoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>);
}

export default App;