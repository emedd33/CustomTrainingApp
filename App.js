import 'react-native-gesture-handler';
import React, { Image } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomePage';
import HeaderBar from './src/components/Molecules/HeaderBar';
import Colors from './src/assets/Colors/Colors';
import HeaderbarStyle from './src/assets/styles/HeaderBarStyle';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerTitle: <HeaderBar title="Home screen" />, headerStyle: HeaderbarStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;