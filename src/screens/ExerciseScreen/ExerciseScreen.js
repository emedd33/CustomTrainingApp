import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { DELETE_EXERCISE } from '../../redux/ExercicseScreen/Actions';
import FloatingActionButton from '../../components/Atoms/FloatingActionButton';

const ExerciseScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const exercises = useSelector((state) => state.exercises)
    const deleteExercise = (exercise) => dispatch({
        type: DELETE_EXERCISE,
        data: exercise
    })
    function renderBackgroundColor(index) {
        if (index % 2 == 0) {
            return "#DEDEDE"
        } else {
            return "white"
        }
    }
    return (
        <View style={{}}>
            {exercises.map((exercise, index) =>
                <TouchableOpacity onPress={() => console.log("hei")} style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                }}>
                    <View style={{ backgroundColor: renderBackgroundColor(index), height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={{ marginLeft: 20 }}>{exercise.name}</Text>
                        <View style={{ marginRight: 20 }}>

                            <TouchableOpacity onPress={() => deleteExercise(exercise)} style={null}>
                                <AntDesign name="delete" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        //<ListItem title={exercise.name} index={index} key={exercise} deleteAction={() => deleteExercise(exercise)} />
                    }
                </TouchableOpacity>
            )}
            <FloatingActionButton action={() => navigation.navigate("AddExerciseScreen")} />
        </View>
    );
}

export default ExerciseScreen