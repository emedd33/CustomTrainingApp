import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../components/Atoms/ListItem';
import { DELETE_EXERCISE } from '../../redux/ExercicseScreen/Actions';
import Colors from '../../assets/Colors/Colors';
import FloatingActionButton from '../../components/Atoms/FloatingActionButton';

const ExerciseScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const exercises = useSelector((state) => state.ExerciseReducer.exercises)
    const deleteExercise = (exercise) => dispatch({
        type: DELETE_EXERCISE,
        data: exercise
    })
    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 30 }}>
            {exercises.map((exercise, index) => <ListItem title={exercise.name} key={index} action={() => console.log("hei")} deleteAction={() => deleteExercise(exercise)} />)}
            <FloatingActionButton action={() => navigation.navigate("AddExerciseScreen")} />
        </View>
    );
}

export default ExerciseScreen