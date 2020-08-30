import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkoutStack from './src/routes/WorkoutStack';
import RoutineStack from './src/routes/RoutineStack';
import HomeStack from './src/routes/HomeStack';
import { Button } from 'react-native';
import DrawerContent from './src/components/organisms/DrawerContent';
import configureStore from './src/redux/Store';
import { Provider } from "react-redux";

const Drawer = createDrawerNavigator();

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Routines" component={RoutineStack} />
          <Drawer.Screen name="Workouts" component={WorkoutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;