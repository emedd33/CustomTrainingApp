import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WorkoutStack from '../routes/WorkoutStack';
import RoutineStack from '../routes/RoutineStack';
import ProfileStack from '../routes/ProfileStack';
import ExerciseStack from '../routes/ExerciseStack';
import DrawerContent from '../components/organisms/DrawerContent';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Profile" drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="Profile" component={ProfileStack} />
                <Drawer.Screen name="Routines" component={RoutineStack} />
                <Drawer.Screen name="Workouts" component={WorkoutStack} />
                <Drawer.Screen name="Exercises" component={ExerciseStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;