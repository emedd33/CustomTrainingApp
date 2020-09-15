import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../assets/Colors/Colors';
import PropTypes from 'prop-types';


const ExerciseListItem = ({ exerciseName, key, onPressAction, deleteAction }) => {
    return (
        <TouchableOpacity onPress={onPressAction} style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
        }}>
            <View style={{ height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <Text style={{ marginLeft: 20 }}>{exerciseName}</Text>
                <View style={{ marginRight: 20 }}>

                    <TouchableOpacity onPress={deleteAction} style={null}>
                        <AntDesign name="delete" size={24} color={Colors.APP_RED} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

ExerciseListItem.propTypes = {
    exerciseName: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
}
export default ExerciseListItem;