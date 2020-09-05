import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../components/Molecules/ListItem';
import { deleteRoutine } from '../../redux/RoutineScreen/TypedActions';
import moment from 'moment';

const RoutineScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const routines = useSelector((state) => state.routines)
    return (
        <View style={styles.container}>
            {
                routines.map((routine, index) =>

                    <View style={styles.itemContainer} key={index}>
                        <ListItem
                            title={routine.name}
                            action={() => console.log("hei")}
                            deleteAction={() => {
                                dispatch(deleteRoutine(routine));
                                navigation.navigate("Routine")
                            }}
                        />
                        <View style={styles.itemSubContainer}>
                            <Text>
                                Last done: {moment(routine.lastDone, "YYYY-MM-DD").fromNow()}
                            </Text>
                        </View>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginRight: 40,
    },
    itemContainer: {
        marginBottom: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    itemSubContainer: {
        display: "flex",
        flexDirection: "row",

    }
})
export default RoutineScreen