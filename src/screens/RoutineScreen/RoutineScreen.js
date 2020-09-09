import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRoutine, addRoutine, setSelectedRoutine } from '../../redux/RoutineScreen/TypedActions';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import Modal from 'modal-react-native-web';
import { Overlay } from 'react-native-elements';
import Colors from '../../assets/Colors/Colors';


const RoutineScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const routines = useSelector((state) => state.routines.routineList)
    const selectedRoutine = useSelector((state) => state.routines.selectedRoutine)


    // Code for not giving error for modal in web browser
    let ModalInput;
    if (typeof document != 'undefined') {
        ModalInput = Modal
        ModalInput.setAppElement('body')
    }


    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

    function renderBackgroundColor(index) {
        if (index % 2 == 0) {
            return "#DEDEDE"
        } else {
            return "white"
        }
    }
    const navigateToRoutineDetail = (routine) => {
        dispatch(setSelectedRoutine(routine))
        navigation.navigate("RoutineDetailScreen")
    }
    return (
        <View style={{ height: "100%", marginTop: 20 }}>
            {
                routines.map((routine, index) =>

                    <TouchableOpacity style={styles.itemContainer} key={routine.id} onPress={() => console.log("hei")}>
                        <TouchableOpacity onPress={() => navigateToRoutineDetail(routine)}>
                            <View style={{ height: 50, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                                <View>

                                    <Text style={{ marginLeft: 20, fontSize: 15 }}>{routine.name}</Text>
                                    {routine.lastDone ? <Text style={{ marginLeft: 25, color: Colors.APP_GRAY }}>{"Last done: " + moment(routine.lastDone, "YYYY-MM-DD").fromNow()}</Text> : null}

                                </View>
                                <View style={{ marginRight: 20 }}>

                                    <TouchableOpacity onPress={() => { dispatch(setSelectedRoutine(routine)); setIsDeleteModalVisible(true) }} style={null}>
                                        <AntDesign name="delete" size={24} color={Colors.APP_RED} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }

            <Overlay isVisible={isDeleteModalVisible} overlayStyle={{ width: "60%" }} onBackdropPress={() => setIsDeleteModalVisible(false)} ModalComponent={ModalInput}>
                <View style={{ padding: 30 }}>
                    <Text style={{ marginBottom: 20, fontSize: 15 }}>Delete {selectedRoutine ? selectedRoutine.name : ""}?</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Button title="Cancel" color={Colors.APP_RED} style={{ flex: 1 }} onPress={() => setIsDeleteModalVisible(false)} />
                        <Button title="   Ok   " color={Colors.APP_GREEN} style={{ flex: 1, }} onPress={() => { setIsDeleteModalVisible(false); dispatch(deleteRoutine(selectedRoutine.id)) }} />
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
                onPress={() => dispatch(addRoutine())}
            >
                <View>

                    <AntDesign name="plus" size={24} color="black" />
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    itemContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20
    },
    itemSubContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"

    }
})
export default RoutineScreen