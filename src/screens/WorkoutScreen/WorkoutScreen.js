import React from 'react';
import { View, Text, Button } from 'react-native';
const WorkoutScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Workouts</Text>
            <Button onPress={() => navigation.openDrawer()} title="drawer" />
            <Button onPress={() => navigation.navigate("WorkoutDetail")} title="details" />
        </View>
    );
}

export default WorkoutScreen