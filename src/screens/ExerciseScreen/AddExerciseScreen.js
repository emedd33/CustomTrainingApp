import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
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
    const [selectedCategory, setSelectedCategory] = useState(null)
    const addExercise = (exercise) => dispatch({
        type: DELETE_EXERCISE,
        data: exercise
    })
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
        dispatch({ type: ADD_EXERCISE, data: null })
        if (!isSubmissionError) {
            addExercise({ name: typedName, type: selectedCategory })
            navigation.navigate("ExerciseScreen")
        } else {
            Alert.alert(
                'Please Fill out form',
                errorMessage,
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: true }
            );
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Name</Text>
            <Input
                placeholder='Type here'
                onChangeText={(input) => { console.log(input); setTypedName(input) }}
            />
            <Text style={styles.inputTitle}>Category</Text>
            <DropDownPicker
                items={categories}
                style={styles.categoryDropdown}
                defaultValue={selectedCategory}
                containerStyle={{ height: 40 }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setSelectedCategory(item.value)}
            />
            <View style={styles.submitExerciseButton}>
                <Button title="Create" color="green" onPress={() => submitExercise()} />
            </View>
        </View>
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
        fontWeight: "bold",
        marginLeft: 10
    },
    submitExerciseButton: {
        marginTop: 20,
        elevation: 0
    }
})
export default AddExerciseScreen;