import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../components/organisms/ListItem';
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
                            }}
                        />
                        <View style={styles.itemSubContainer}>
                            <Text style={{ marginLeft: 0 }}>
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
        marginRight: 40,
        margin: 20
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