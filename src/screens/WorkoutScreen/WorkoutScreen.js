import React from 'react';
import { View, Text, Button } from 'react-native';
const WorkoutScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>WorkoutScreen</Text>
            <Button onPress={() => navigation.openDrawer()} title="Press me" />
        </View>
    );
}

export default WorkoutScreen