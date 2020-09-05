import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkoutStack from './src/routes/WorkoutStack';
import RoutineStack from './src/routes/RoutineStack';
import ProfileStack from './src/routes/ProfileStack';
import DrawerContent from './src/components/organisms/DrawerContent';
import configureStore from './src/redux/store';
import { Provider } from "react-redux";
import ExerciseStack from './src/routes/ExerciseStack';

const Drawer = createDrawerNavigator();

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Exercises" drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Profile" component={ProfileStack} />
          <Drawer.Screen name="Routines" component={RoutineStack} />
          <Drawer.Screen name="Workouts" component={WorkoutStack} />
          <Drawer.Screen name="Exercises" component={ExerciseStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;