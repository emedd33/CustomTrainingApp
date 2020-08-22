import { Text, View, StyleSheet } from "react-native";
import React from 'react';
import Colors from "../../assets/Colors/Colors";
import { Feather } from '@expo/vector-icons';

const HeaderBar = (props) => {
    const title = props.title
    return (
        <View style={styles.mainContainer}>
            <Feather style={styles.iconContainer} name="menu" size={24} color="black" onPress={() => console.log("activate sidebar")} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        diplay: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: Colors.APP_RED,
        backgroundColor: Colors.APP_RED,

    },
    iconContainer: {
        heigh: "100%",
        flex: 1

    },
    titleContainer: {
        flex: 4,
    },
    title: {
        position: "absolute",
        left: "30%"
    }
})
export default HeaderBar;