import React from 'react';
import { View, Text } from 'react-native';
import ExerciseScreen from '../ExerciseScreen/ExerciseScreen';
import ExerciseScreenContent from '../../components/Exercise/ExerciseContent';
import { useDispatch } from 'react-redux';
import { addExerciseToRoutine } from '../../redux/RoutineScreen/TypedActions';

const RoutineAddExerciseScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    return <ExerciseScreenContent navigation={navigation} addExerciseToRoutineAction={(exercise) => dispatch(addExerciseToRoutine(exercise))} />
}

export default RoutineAddExerciseScreen;