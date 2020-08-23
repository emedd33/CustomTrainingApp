import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';

import WorkoutStack from './WorkoutStack.js';
import RoutineStack from './RoutineStack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Workouts: {
        screen: WorkoutStack
    },
    Routines: {
        screen: RoutineStack
    }
})


export default Drawer
