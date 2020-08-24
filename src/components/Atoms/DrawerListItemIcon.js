import React from 'react';
import { Fontisto, Foundation, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet, View } from 'react-native';
const DrawerListItemIcon = ({ navigationPath }) => {
    if (navigationPath === "Home") {
        return (
            <Fontisto name="home" size={24} color="black" />);
    }
    if (navigationPath === "Workouts") {
        return (
            <MaterialCommunityIcons name="human-handsup" size={24} color="black" />);

    }
    if (navigationPath === "Routines") {
        return (
            <Foundation name="clipboard-notes" size={24} color="black" />);

    }
    return <View></View>
}

const styles = StyleSheet.create({
    button: { margin: "1rem" }
})
export default DrawerListItemIcon;