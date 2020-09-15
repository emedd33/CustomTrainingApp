import React from 'react';
import { View, Text, Button } from 'react-native';
import { Overlay, Input } from 'react-native-elements';
import Modal from 'modal-react-native-web';
import Colors from '../../assets/Colors/Colors';
const OverlayModalEditText = ({ onBackdropPress, isVisible, text, onChange }) => {
    let ModalInput;
    if (typeof document != 'undefined') {
        ModalInput = Modal
        ModalInput.setAppElement('body')
    }
    return (
        <Overlay isVisible={isVisible} overlayStyle={{ width: "60%" }} onBackdropPress={onBackdropPress} ModalComponent={ModalInput}>
            <View style={{}}>
                <Input
                    value={text}
                    onChangeText={(updatedText) => {
                        onChange(updatedText)
                    }}
                    onSubmitEditing={onBackdropPress}
                />
            </View>
        </Overlay>
    );
}

export default OverlayModalEditText;