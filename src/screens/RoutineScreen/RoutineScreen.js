import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../components/Molecules/ListItem';
import { deleteRoutine } from '../../redux/RoutineScreen/TypedActions';
const RoutineScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const routines = useSelector((state) => state.routines)
    return (
        <View style={styles.container}>
            {routines.map((routine, index) => <ListItem title={routine.name} key={index} action={() => console.log("hei")} deleteAction={() => dispatch(deleteRoutine(routine))} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginRight: 40,
    }
})
export default RoutineScreen