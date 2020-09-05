import React from 'react';
import { Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import { View, Text, StyleSheet } from 'react-native';
import OverlayButton from '../Atoms/OverlayButton';

const OverLayConfirm = ({ visible, toggleOverlay, confirmAction, confirmMessage }) => {

    if (typeof document != 'undefined') {
        Modal.setAppElement('body');
        // to remove errorLog
        return (
            <Overlay ModalComponent={Modal} isVisible={visible} onBackdropPress={toggleOverlay} >
                <View style={styles.overlayContainer}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.overlayText}>{confirmMessage}</Text>
                    </View>
                    <View style={styles.overlayButtonContainer}>
                        <OverlayButton title="Cancel" action={() => toggleOverlay()} />
                        <OverlayButton title="Ok" action={() => { toggleOverlay(); confirmAction() }} />
                    </View>
                </View>
            </Overlay>)
    } else {
        return (
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >
                <View style={styles.overlayContainer}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.overlayText}>{confirmMessage}</Text>
                    </View>
                    <View style={styles.overlayButtonContainer}>
                        <OverlayButton title="Cancel" action={() => toggleOverlay()} />
                        <OverlayButton title="Ok" action={() => { toggleOverlay(); confirmAction() }} />
                    </View>
                </View>
            </Overlay>)

    }
}

const styles = StyleSheet.create({
    overlayText: {
        fontSize: 20
    },
    overlayContainer: {
        justifyContent: "center",
        width: 300,
        height: 100
    },
    overlayButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 20,
    },

})
export default OverLayConfirm;