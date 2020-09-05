import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';

import { AntDesign } from '@expo/vector-icons';
import OverlayButton from '../Atoms/OverlayButton';
const ListItem = ({ action, title, deleteAction }) => {
    const [visible, setVisible] = useState(false)
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    Modal.setAppElement('body'); // to remove errorLog
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.leftSide}>
                {
                    action ?
                        <TouchableOpacity onPress={action}>
                            <Text style={styles.text}>{title}</Text>
                        </TouchableOpacity>
                        :
                        <Text style={styles.text}>{title}</Text>
                }
            </TouchableOpacity>
            {
                deleteAction ?
                    <TouchableOpacity onPress={toggleOverlay} style={styles.icon}>
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>

                    : null
            }
            <Overlay ModalComponent={Modal} isVisible={visible} onBackdropPress={toggleOverlay} >
                <View style={styles.overlayContainer}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.overlayText}>Delete {title}?</Text>
                    </View>
                    <View style={styles.overlayButtonContainer}>
                        <OverlayButton title="Cancel" action={() => setVisible(false)} />
                        <OverlayButton title="Ok" action={() => { setVisible(false); deleteAction() }} />
                    </View>
                </View>
            </Overlay>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    leftSide: {
        width: 300,
        height: 30,
        paddingTop: 10,
        marginRight: 10
    },
    text: {
        fontWeight: "bold"
    },
    icon: {
        marginLeft: 10
    },
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
export default ListItem;