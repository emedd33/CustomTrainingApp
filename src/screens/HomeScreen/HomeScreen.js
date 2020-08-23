import React from 'react';
import { View, Text, Button } from 'react-native';
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.openDrawer()} title="Press me" />
    </View>
  );
}

export default HomeScreen