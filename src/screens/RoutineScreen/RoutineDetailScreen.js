import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../assets/Colors/Colors';
import { Button as Button_rne } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { deleteRoutine, deleteExerciseFromRoutine } from '../../redux/RoutineScreen/TypedActions';
import ExerciseListItem from '../../components/Exercise/ExerciseListItem';
import FloatingActionButton from '../../components/Atoms/FloatingActionButton';
import OverlayModal from '../../components/Atoms/OverlayModal';

const RoutineDetailScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const routine = useSelector((state) => state.routines.selectedRoutine)
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState({ type: routine, data: "" })

    const openDeleteItemOverlay = (item) => {
        setSelectedItem(item);
        setIsDeleteModalVisible(true)
    }
    const submitDeleteItem = () => {
        setIsDeleteModalVisible(false);
        switch (selectedItem.type) {
            case "routine":
                dispatch(deleteRoutine(selectedItem.data.id));
                navigation.navigate("RoutineScreen");
                return
            case "exercise":
                dispatch(deleteExerciseFromRoutine(selectedItem.data.id))
                return
        }
    }

    return (
        <View style={{ height: "100%", display: "flex" }}>
            <View style={{ flex: 1, display: "flex", flexDirection: "row", height: "20%", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flex: 3, height: "100%", justifyContent: "center" }}>
                    <Button_rne
                        buttonStyle={styles.button}
                        title="Start workout"
                        titleStyle={{ color: "black" }}
                        onPress={() => console.log("hei")} />
                </View>
                <View style={{ flex: 1, height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => openDeleteItemOverlay({ type: "routine", data: routine })}>
                        <AntDesign name="delete" size={24} color={Colors.APP_RED} />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ flex: 1, padding: 20 }}>
                <View style={styles.subTitleContainer}>

                    <View style={{ display: "flex", paddingButtom: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Number of exercises</Text>
                        <Text>10</Text>

                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Number of completion:</Text>
                        <Text>{routine.numberOfCompletion}</Text>

                    </View>
                </View>
            </View>

            <View style={{ flex: 4, padding: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30 }}>Exercises</Text>
                {routine.exercises.map((exercise, index) =>
                    <ExerciseListItem exerciseName={exercise.name} onPressAction={() => console.log("hei ")} key={index} deleteAction={() => openDeleteItemOverlay({ type: "exercise", data: exercise })} />
                )}
            </View>
            <FloatingActionButton onPressAction={() => console.log("pressed")} />
            <OverlayModal
                isVisible={isDeleteModalVisible}
                selectedItemName={selectedItem.data ? selectedItem.data.name : null}
                onBackdropPress={() => setIsDeleteModalVisible(false)}
                onCancelPress={() => setIsDeleteModalVisible(false)}
                onOkPress={() => { submitDeleteItem() }} />
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.APP_GREEN,
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    subTitleContainer: {
        display: "flex",
        padding: 15,
        height: 100,
        borderRadius: 2,
        justifyContent: "center",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    }
})

export default RoutineDetailScreen;