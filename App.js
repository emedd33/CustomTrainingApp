import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkoutStack from './src/routes/WorkoutStack';
import RoutineStack from './src/routes/RoutineStack';
import HomeStack from './src/routes/HomeStack';
import { Button } from 'react-native';
import DrawerContent from './src/components/organisms/DrawerContent';

const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Routines" component={RoutineStack} />
        <Drawer.Screen name="Workouts" component={WorkoutStack} />
      </Drawer.Navigator>
    </NavigationContainer>);
}

export default App;