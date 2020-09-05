import { DELETE_EXERCISE, ADD_EXERCISE } from "./Actions";

const { default: INITIAL_EXERCISE_STATE } = require("./InitialExerciseState");

const ExerciseReducer = (state = INITIAL_EXERCISE_STATE, action) => {
    switch (action.type) {
        case DELETE_EXERCISE:
            return state.filter((exercise) => exercise.name != action.data.name)
        case ADD_EXERCISE:
            const newExerciseList = JSON.parse(JSON.stringify(state.exercises));
            newExerciseList.push(action.data)
            return newExerciseList
        default:
            return state
    }
}
export default ExerciseReducer