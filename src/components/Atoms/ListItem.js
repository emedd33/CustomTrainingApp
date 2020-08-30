import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ListItem = ({ action, title, deleteAction }) => {


    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.leftSide}>
                {
                    action ?
                        <TouchableOpacity onPress={action}>
                            <Text style={styles.text}>{title}</Text>
                        </TouchableOpacity>
                        :
                        <Text style={styles.text}>{title}</Text>
                }
            </TouchableOpacity>
            {
                deleteAction ?
                    <TouchableOpacity onPress={deleteAction} style={styles.icon}>
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                    : null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 300,
        margin: 10,
        paddingBottom: 10,
        marginRight: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    leftSide: {
        width: 300,
        height: 30,
        paddingTop: 10,
        marginRight: 10
    },
    text: {
        fontWeight: "bold"
    },
    icon: {
        marginLeft: 10
    }

})
export default ListItem;