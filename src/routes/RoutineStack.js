import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RoutineScreen from '../screens/RoutineScreen/RoutineScreen';
import DrawerIcon from '../components/Atoms/DrawerIcon';
import Colors from '../assets/Colors/Colors';
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
        </Stack.Navigator>
    );
}

export default RoutineStack