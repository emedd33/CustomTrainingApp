import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
const DrawerIcon = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={24} color="black" style={styles.button} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { marginLeft: 0, padding: 0 },
    button: { margin: 0, marginLeft: 30 }
})
export default DrawerIcon;