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
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 30,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: 10,

    },
    headerBarIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 10,
        marginLeft: 20,

    },
    titleContainer: {
        height: 50,
        marginLeft: 1,
        marginTop: 1,
        marginLeft: 20,
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