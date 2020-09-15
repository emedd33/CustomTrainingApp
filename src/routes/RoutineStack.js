import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RoutineScreen from '../screens/RoutineScreen/RoutineScreen';
import DrawerIcon from '../components/Atoms/DrawerIcon';
import Colors from '../assets/Colors/Colors';
import RoutineDetailScreen from '../screens/RoutineScreen/RoutineDetailScreen';
import RoutineAddExerciseScreen from '../screens/RoutineScreen/RoutineAddExerciseScreen';
import AddExerciseScreen from '../screens/ExerciseScreen/AddExerciseScreen';
const Stack = createStackNavigator()
const RoutineStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RoutineScreen" component={RoutineScreen} options={{
                headerTitle: "Routines",
                headerLeft: () => <DrawerIcon navigation={navigation} />,
                headerStyle: {
                    backgroundColor: Colors.APP_RED,
                },
            }} />
            <Stack.Screen name="RoutineDetailScreen" component={RoutineDetailScreen} options={{
                headerTitle: "Routines",
                headerStyle: {
                    backgroundColor: Colors.APP_RED,
                },
            }} />

            <Stack.Screen name="RoutineAddExercise" component={RoutineAddExerciseScreen} options={{
                headerTitle: "Add exercise",
                headerStyle: {
                    backgroundColor: Colors.APP_RED,
                },
            }} />

            <Stack.Screen name="AddExerciseScreen" component={AddExerciseScreen} options={{
                headerTitle: "Add exercise",
                headerStyle: {
                    backgroundColor: Colors.APP_RED,
                },
            }} />
        </Stack.Navigator>
    );
}

export default RoutineStack