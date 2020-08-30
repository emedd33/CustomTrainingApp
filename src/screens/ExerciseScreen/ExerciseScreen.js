import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../../components/Atoms/ListItem';
const ExerciseScreen = ({ navigation }) => {
    const exercises = useSelector((state) => state.ExerciseReducer.exercises)
    console.log(exercises)
    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 30 }}>
            {exercises.map(exercise => <ListItem title={exercise.name} action={() => console.log("hei")} deleteAction={() => console.log("delete")} />)}
        </View>
    );
}

export default ExerciseScreen