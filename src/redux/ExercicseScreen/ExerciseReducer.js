import { DELETE_EXERCISE } from "./Actions";

const { default: INITIAL_STATE } = require("../InitialState");

const ExerciseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DELETE_EXERCISE:
            return {
                ...state,
                exercises: state.exercises.filter((exercise) => exercise.name != action.data.name)
            }
        default:
            return state
    }
}
export default ExerciseReducer