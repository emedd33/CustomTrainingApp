import React from 'react';
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import ExerciseScreen from '../screens/ExerciseScreen/ExerciseScreen';
import DrawerIcon from '../components/Atoms/DrawerIcon';
import Colors from '../assets/Colors/Colors';
import AddExerciseScreen from '../screens/ExerciseScreen/AddExerciseScreen';
const Stack = createStackNavigator()
const ExerciseStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} options={{
                headerTitle: "Exercises",
                headerLeft: () => <DrawerIcon navigation={navigation} />,
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

export default ExerciseStack