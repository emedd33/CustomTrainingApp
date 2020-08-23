import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
const DrawerIcon = ({ navigation }) => {
    return (
        <Feather name="menu" size={24} color="black" style={styles.button} onPress={() => navigation.openDrawer()} />
    );
}

const styles = StyleSheet.create({
    button: { margin: "1rem" }
})
export default DrawerIcon;