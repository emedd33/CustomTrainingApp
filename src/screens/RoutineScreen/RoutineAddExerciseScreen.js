import React from 'react';
import ExerciseScreenContent from '../../components/Exercise/ExerciseContent';
import { useDispatch } from 'react-redux';
import { addExerciseToRoutine } from '../../redux/RoutineReducer/TypedActions';

const RoutineAddExerciseScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    return <ExerciseScreenContent navigation={navigation} addExerciseToRoutineAction={(exercise) => dispatch(addExerciseToRoutine(exercise))} />
}

export default RoutineAddExerciseScreen;