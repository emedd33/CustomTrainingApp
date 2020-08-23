import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RoutineScreen from '../screens/RoutineScreen/RoutineScreen';
const Stack = createStackNavigator()
const RoutineStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RoutineScreen" component={RoutineScreen} />
        </Stack.Navigator>
    );
}

export default RoutineStack