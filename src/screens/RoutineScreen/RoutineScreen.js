import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../components/organisms/ListItem';
import { deleteRoutine } from '../../redux/RoutineScreen/TypedActions';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

const RoutineScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const routines = useSelector((state) => state.routines)

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
                routines.map((routine, index) =>

                    <TouchableOpacity style={styles.itemContainer} key={index} onPress={() => console.log("hei")}>
                        <TouchableOpacity onPress={() => console.log("hei")}>
                            <View style={{ backgroundColor: renderBackgroundColor(index), height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                                <Text style={{ marginLeft: 20 }}>{routine.name}</Text>
                                <View style={{ marginRight: 20 }}>

                                    <TouchableOpacity onPress={() => dispatch(deleteRoutine(routine))} style={null}>
                                        <AntDesign name="delete" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }
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