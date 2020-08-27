import { View, StyleSheet, Text } from "react-native";
import React from 'react';
import DrawerListItemIcon from "../Atoms/DrawerListItemIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
    }
})
export default SidebarListItem;