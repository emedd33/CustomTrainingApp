import { StyleSheet, Text, Image, View } from "react-native";
import React from 'react';
import Colors from "../../assets/Colors/Colors";
const DrawerHeader = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.headerBarIcon} source={require('../../assets/images/pull-up-icon.jpg')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Custom workout log</Text>
                <Text style={styles.subtitle}>Eskild Ruud Mageli</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.APP_RED,
        height: "5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: "1rem",

    },
    headerBarIcon: {
        width: "3rem",
        height: "3rem",
        borderRadius: "3rem",
        borderStyle: "solid",
        borderWidth: "0.1rem",
        marginLeft: "1rem",

    },
    titleContainer: {
        height: "3rem",
        marginLeft: "1rem",
        marginTop: "1rem",
    },
    title: {
        fontSize: 15,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 10
    }
})
export default DrawerHeader;