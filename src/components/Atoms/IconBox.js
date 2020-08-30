import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
const IconBox = ({ title, subTitle, Icon }) => {
    return (
        <View style={styles.container}>
            {Icon}
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        height: 130,
        width: "90%",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    Icon: {
        width: 80,
        height: 80,
        marginLeft: 10,
    },
    textContainer: {
        marginRight: 100,
        display: "flex",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subTitle: {
        opacity: 0.5
    }
})
export default IconBox;