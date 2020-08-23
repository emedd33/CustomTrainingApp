import React from 'react';
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DrawerIcon from '../components/Atoms/DrawerIcon';
import Colors from '../assets/Colors/Colors';
const Stack = createStackNavigator()
const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerTitle: "Home",
                headerLeft: () => <DrawerIcon navigation={navigation} />,
                headerStyle: {
                    backgroundColor: Colors.APP_RED,
                },
            }} />
        </Stack.Navigator>
    );
}

export default HomeStack