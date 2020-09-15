import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import Modal from 'modal-react-native-web';

import { Overlay, Icon } from 'react-native-elements';
import Colors from '../../assets/Colors/Colors';
import { deleteExercise } from '../../redux/ExercicseScreen/TypedActions';
import ExerciseListItem from '../../components/Exercise/ExerciseListItem';
import FloatingActionButton from '../../components/Atoms/FloatingActionButton';
import OverlayModalConfirmDelete from '../../components/Atoms/OverlayModalConfirmDelete';
import ExerciseScreenContent from '../../components/Exercise/ExerciseContent';


const ExerciseScreen = ({ navigation }) => {
    return <ExerciseScreenContent navigation={navigation} />
}

export default ExerciseScreen