import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const RoutineDetailScreen = () => {
    const routine = useSelector((state) => state.routines.selectedRoutine)
    return (
        <View>
            <Text>
                RoutineDetailScreen: {routine.name}
            </Text>
        </View>
    );
}

export default RoutineDetailScreen;