import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, Picker } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import CategoryType from '../../assets/StringConst/CategoryType'
import { useDispatch } from 'react-redux';
import { ADD_EXERCISE, DELETE_EXERCISE } from '../../redux/ExercicseScreen/Actions';

const categories = [
    { label: CategoryType.STRENGTH, value: CategoryType.STRENGTH, icon: () => <Icon name="flag" size={18} color="#900" /> },
    { label: CategoryType.CARDIO, value: CategoryType.CARDIO, icon: () => <Icon name="flag" size={18} color="#900" /> },
    { label: CategoryType.MOBILITY, value: CategoryType.MOBILITY, icon: () => <Icon name="flag" size={18} color="#900" /> },

]

const AddExerciseScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [typedName, setTypedName] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('')
    const addExercise = (exercise) => dispatch({
        type: ADD_EXERCISE,
        data: exercise
    })
    const renderPickerStyle = () => {
        if (selectedCategory === '') {
            return { height: 50, color: "#ACACAC" }
        } else {
            return { height: 50, color: "black" }
        }
    }
    const checkSubmission = () => {
        let errorMessage = ""
        if (!typedName || typedName === "") {
            errorMessage += "\nmissing name"
        }
        if (!selectedCategory) {
            errorMessage += "\nmissing category"
        }
        if (errorMessage === "") {
            // No error, good for submission
            return [errorMessage, false]
        } else {
            // Error in submission
            return [errorMessage, true]
        }

    }
    const submitExercise = () => {
        const [errorMessage, isSubmissionError] = checkSubmission()
        if (!isSubmissionError) {
            addExercise({ name: typedName, type: selectedCategory })
            navigation.goBack()
        } else {
            Alert.alert(
                'Please Fill out form',
                errorMessage,
                [{ text: 'OK' }],
                { cancelable: true }
            );
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Name</Text>
            <Input
                placeholder='Type here'
                onChangeText={(input) => { setTypedName(input) }}
            />
            <Text style={styles.inputTitle}>Category</Text>
            <View style={{ borderColor: "#BCBCBC", margin: 10 }}>

                <Picker
                    selectedValue={selectedCategory}
                    style={renderPickerStyle()}
                    onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                >
                    <Picker.Item value='' color="#ACACAC" label='Choose category' />
                    <Picker.Item label={CategoryType.STRENGTH} color="black" value={CategoryType.STRENGTH} />
                    <Picker.Item label={CategoryType.CARDIO} color="black" value={CategoryType.CARDIO} />
                    <Picker.Item label={CategoryType.MOBILITY} color="black" value={CategoryType.MOBILITY} />
                </Picker>
            </View>
            <View style={styles.submitExerciseButton}>
                <Button title="Create" color="green" onPress={() => submitExercise()} />
            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20
    },
    inputTitle: {
        marginLeft: 10
    },
    submitExerciseButton: {
        marginTop: 20,
        elevation: 0
    }
})
export default AddExerciseScreen;