import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react';
import DrawerListItemIcon from "../Atoms/DrawerListItemIcon";
const SidebarListItem = ({ iconPath, text, action }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => action()}>
            <Text style={styles.text}>{text}</Text>
            <DrawerListItemIcon navigationPath={iconPath} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
    }
})
export default SidebarListItem;