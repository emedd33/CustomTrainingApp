import React from 'react';
import { View, Text, Button } from 'react-native';
const WorkoutDetail = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>WorkoutDetail</Text>
            <Button onPress={() => navigation.openDrawer()} title="drawer" />

        </View>
    );
}

export default WorkoutDetail