import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../assets/Colors/Colors';

const FloatingActionButton = ({ onPressAction }) => {
    return (
        <TouchableOpacity
            style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                position: 'absolute',
                bottom: 50,
                right: 30,
                height: 70,
                backgroundColor: Colors.APP_RED,
                borderRadius: 100,
            }}
            onPress={onPressAction}
        >
            <View>

                <AntDesign name="plus" size={24} color="black" />
            </View>
        </TouchableOpacity>
    );
}

export default FloatingActionButton;