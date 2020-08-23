import React from 'react';
import { View, Text, Button } from 'react-native';
const RoutineScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>RoutineScreen</Text>
            <Button onPress={() => navigation.openDrawer()} title="Press me" />
        </View>
    );
}

export default RoutineScreen