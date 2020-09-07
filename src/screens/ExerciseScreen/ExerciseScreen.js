import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import Modal from 'modal-react-native-web';

import { Overlay, Icon } from 'react-native-elements';
import Colors from '../../assets/Colors/Colors';
import { deleteExercise } from '../../redux/ExercicseScreen/TypedActions';


const ExerciseScreen = ({ navigation }) => {
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

    function renderBackgroundColor(index) {
        if (index % 2 == 0) {
            return "#DEDEDE"
        } else {
            return "white"
        }
    }
    return (
        <View style={{ height: "100%" }}>
            {exercises.map((exercise, index) =>
                <TouchableOpacity onPress={() => console.log("hei")} key={index} style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                }}>
                    <View style={{ backgroundColor: renderBackgroundColor(index), height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={{ marginLeft: 20 }}>{exercise.name}</Text>
                        <View style={{ marginRight: 20 }}>

                            <TouchableOpacity onPress={() => { setSelectedExercise(exercise); setIsVisible(true) }} style={null}>
                                <AntDesign name="delete" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            )
            }
            <Overlay isVisible={isVisible} overlayStyle={{ width: "60%" }} onBackdropPress={() => setIsVisible(false)} ModalComponent={ModalInput}>
                <View style={{ padding: 30 }}>

                    <Text style={{ marginBottom: 20, fontSize: 15 }}>Delete {selectedExercise ? selectedExercise.name : ""}?</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Button title="Cancel" color={Colors.APP_RED} style={{ marginLeft: 10 }} onPress={() => setIsVisible(false)} />
                        <Button title="   Ok   " color={Colors.APP_GREEN} style={{ marginLeft: 10 }} onPress={() => { setIsVisible(false); dispatch(deleteExercise(selectedExercise.id)) }} />
                    </View>
                </View>
            </Overlay>
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    height: 70,
                    backgroundColor: Colors.APP_RED,
                    borderRadius: 100,
                }}
                onPress={() => navigation.navigate("AddExerciseScreen")}
            >
                <View>

                    <AntDesign name="plus" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View >
    );
}

export default ExerciseScreen