import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';

import { AntDesign } from '@expo/vector-icons';
import OverLayConfirm from '../Molecules/OverLayConfirm';
const ListItem = ({ action, title, deleteAction, index }) => {
    const [visible, setVisible] = useState(false)
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const renderStyle = () => {
        let style = containerStyle
        if (index % 2 === 0) {
            style.backgroundColor = "gray"
            return style
        } else {
            style.backgroundColor = "transparent"
            return style
        }
    }
    return (
        <View style={renderStyle()}>

            <View style={styles.leftSide}>
                {
                    action ?
                        <TouchableOpacity onPress={action}>
                            <Text style={styles.text}>{title}</Text>
                        </TouchableOpacity>
                        :
                        <Text style={styles.text}>{title}</Text>
                }
            </View>
            {
                deleteAction ?
                    <TouchableOpacity onPress={toggleOverlay} style={styles.icon}>
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>

                    : null
            }
            <OverLayConfirm visible={visible} toggleOverlay={toggleOverlay} confirmAction={() => deleteAction()} confirmMessage={"Delete " + title + "?"} />
        </View>
    )
}
const containerStyle = {
    width: "100%",
    marginRight: 20,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "space-between",

}
const styles = StyleSheet.create({
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