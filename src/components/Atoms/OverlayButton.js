import { View, Button, StyleSheet } from 'react-native';
import React from 'react';
const OverlayButton = ({ action, title }) => {
    return (
        <View style={{ marginLeft: 15, width: 80 }}>
            <Button title={title} style={styles.buttonContainer} color="grey" onPress={action} />
        </View>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "grey",
        height: 50,
        width: 70,
    }
})
export default OverlayButton;