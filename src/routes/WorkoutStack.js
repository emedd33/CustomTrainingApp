import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutScreen from '../screens/WorkoutScreen/WorkoutScreen';
import WorkoutDetail from '../screens/WorkoutScreen/WorkoutDetail';
const Stack = createStackNavigator()
const WorkoutStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
            <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
        </Stack.Navigator>
    );
}

export default WorkoutStack