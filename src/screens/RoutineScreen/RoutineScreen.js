import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRoutine, addRoutine, setSelectedRoutine } from '../../redux/RoutineReducer/TypedActions';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'modal-react-native-web';
import { Overlay } from 'react-native-elements';
import Colors from '../../assets/Colors/Colors';
import FloatingActionButton from '../../components/Atoms/FloatingActionButton';
import dayjs from 'dayjs';
import { getSelectedRoutine, getRoutineList } from '../../redux/RoutineReducer';


const RoutineScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const routines = useSelector(getRoutineList)
    const selectedRoutine = useSelector(getSelectedRoutine)


    // Code for not giving error for modal in web browser
    let ModalInput;
    if (typeof document != 'undefined') {
        ModalInput = Modal
        ModalInput.setAppElement('body')
    }


    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)


    const navigateToRoutineDetail = (routine) => {
        dispatch(setSelectedRoutine(routine))
        navigation.navigate("RoutineDetailScreen")
    }
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    return (
        <View style={{ height: "100%", marginTop: 20 }}>
            {
                routines.map((routine, index) =>

                    <TouchableOpacity style={styles.itemContainer} key={routine.id} onPress={() => console.log("hei")}>
                        <TouchableOpacity onPress={() => navigateToRoutineDetail(routine)}>
                            <View style={{ height: 50, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                                <View>

                                    <Text style={{ marginLeft: 20, fontSize: 15 }}>{routine.name}</Text>
                                    {routine.lastDone ? <Text style={{ marginLeft: 25, color: Colors.APP_GRAY }}>{"Last done: " + dayjs(routine.lastDone).fromNow()}</Text> : null}

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
            <FloatingActionButton onPressAction={() => dispatch(addRoutine())} />
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