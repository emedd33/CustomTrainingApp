import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutScreen from '../screens/WorkoutScreen/WorkoutScreen';
import WorkoutDetail from '../screens/WorkoutScreen/WorkoutDetail';
import DrawerIcon from '../components/Atoms/DrawerIcon';
import Colors from '../assets/Colors/Colors';
const Stack = createStackNavigator()
const WorkoutStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} options={{
                headerTitle: "Workouts",
                headerLeft: () => <DrawerIcon navigation={navigation} />,
                headerStyle: {
                    backgroundColor: Colors.APP_RED
                },
            }} />
            <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
        </Stack.Navigator>
    );
}

export default WorkoutStack