import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import Modal from 'modal-react-native-web';

import { Overlay, Icon } from 'react-native-elements';
import Colors from '../../assets/Colors/Colors';
import { deleteExercise } from '../../redux/ExercicseScreen/TypedActions';
import ExerciseListItem from '../../components/Exercise/ExerciseListItem';
import FloatingActionButton from '../../components/Atoms/FloatingActionButton';
import OverlayModalConfirmDelete from '../../components/Atoms/OverlayModalConfirmDelete';


const ExerciseScreenContent = ({ navigation, addExerciseToRoutineAction }) => {
    const dispatch = useDispatch();
    const exercises = useSelector((state) => state.exercises)
    const [isVisible, setIsVisible] = useState(false)

    // Code for not giving error for modal in web browser
    let ModalInput;
    if (typeof document != 'undefined') {
        ModalInput = Modal
        ModalInput.setAppElement('body')
    }
    const [selectedExercise, setSelectedExercise] = useState(null)

    const onExerciseListPress = (exercise) => {
        if (addExerciseToRoutineAction) {
            addExerciseToRoutineAction(exercise);
            navigation.goBack();
        }
    }
    return (
        <View style={{ height: "100%", margin: 20 }}>
            {exercises.map((exercise, index) =>
                <ExerciseListItem
                    exerciseName={exercise.name}
                    key={index}
                    onPressAction={() => onExerciseListPress(exercise)}
                    deleteAction={() => { setSelectedExercise(exercise); setIsVisible(true) }} />
            )
            }
            <OverlayModalConfirmDelete
                onBackdropPress={() => setIsVisible(false)}
                onCancelPress={() => setIsVisible(false)}
                onOkPress={() => { setIsVisible(false); dispatch(deleteExercise(selectedExercise.id)) }}
                selectedItemName={selectedExercise ? selectedExercise.name : null}
                isVisible={isVisible} />

            <FloatingActionButton onPressAction={() => navigation.navigate("AddExerciseScreen")} />

        </View >
    );
}

export default ExerciseScreenContent