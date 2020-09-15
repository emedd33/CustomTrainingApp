import React from 'react';
import { View, Text, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import Colors from '../../assets/Colors/Colors';
const OverlayModalConfirmDelete = ({ onBackdropPress, onCancelPress, onOkPress, isVisible, selectedItemName }) => {
    let ModalInput;
    if (typeof document != 'undefined') {
        ModalInput = Modal
        ModalInput.setAppElement('body')
    }
    return (
        <Overlay isVisible={isVisible} overlayStyle={{ width: "60%" }} onBackdropPress={onBackdropPress} ModalComponent={ModalInput}>
            <View style={{ padding: 30 }}>
                <Text style={{ marginBottom: 20, fontSize: 15 }}>Delete {selectedItemName}?</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Button title="Cancl" color="red" style={{ flex: 1 }} onPress={onCancelPress} />
                    <Button title="   Ok   " color={Colors.APP_GREEN} style={{ flex: 1, }} onPress={onOkPress} />
                </View>
            </View>
        </Overlay>
    );
}

export default OverlayModalConfirmDelete;