import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import FloatingActionButton from '../../components/Atoms/FloatingActionButton';
import { deleteRoutine, addRoutine } from '../../redux/RoutineScreen/TypedActions';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import Modal from 'modal-react-native-web';
import { Overlay } from 'react-native-elements';
import Colors from '../../assets/Colors/Colors';


const RoutineScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const routines = useSelector((state) => state.routines)

    // Code for not giving error for modal in web browser
    let ModalInput;
    if (typeof document != 'undefined') {
        ModalInput = Modal
        ModalInput.setAppElement('body')
    }


    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const [selectedRoutine, setSelectedRoutine] = useState(null)

    function renderBackgroundColor(index) {
        if (index % 2 == 0) {
            return "#DEDEDE"
        } else {
            return "white"
        }
    }
    return (
        <View style={styles.container}>
            {
                routines.map((routine) =>

                    <TouchableOpacity style={styles.itemContainer} key={routine.id} onPress={() => console.log("hei")}>
                        <TouchableOpacity onPress={() => console.log("hei")}>
                            <View style={{ backgroundColor: renderBackgroundColor(routine.id), height: 50, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                                <View>

                                    <Text style={{ marginLeft: 20, fontSize: 15 }}>{routine.name}</Text>
                                    <Text style={{ marginLeft: 25, color: Colors.APP_GRAY }}>{routine.lastDone ? "Last done: " + moment(routine.lastDone, "YYYY-MM-DD").fromNow() : ""}</Text>

                                </View>
                                <View style={{ marginRight: 20 }}>

                                    <TouchableOpacity onPress={() => { setSelectedRoutine(routine); setIsDeleteModalVisible(true) }} style={null}>
                                        <AntDesign name="delete" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }
            <FloatingActionButton action={() => dispatch(addRoutine())} />

            <Overlay isVisible={isDeleteModalVisible} overlayStyle={{ width: "60%" }} onBackdropPress={() => setIsDeleteModalVisible(false)} ModalComponent={ModalInput}>
                <View style={{ padding: 30 }}>
                    <Text style={{ marginBottom: 20, fontSize: 15 }}>Delete {selectedRoutine ? selectedRoutine.name : ""}?</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Button title="Cancel" color={Colors.APP_RED} style={{ flex: 1 }} onPress={() => setIsDeleteModalVisible(false)} />
                        <Button title="   Ok   " color={Colors.APP_GREEN} style={{ flex: 1, }} onPress={() => { setIsDeleteModalVisible(false); dispatch(deleteRoutine(selectedRoutine.id)) }} />
                    </View>
                </View>
            </Overlay>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    itemContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    itemSubContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"

    }
})
export default RoutineScreen