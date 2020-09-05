import { DELETE_EXERCISE, ADD_EXERCISE } from "./Actions";

const { default: INITIAL_STATE } = require("../InitialState");

const ExerciseReducer = (state = INITIAL_STATE, action) => {
    console.log("addind")
    switch (action.type) {
        case DELETE_EXERCISE:
            return {
                ...state,
                exercises: state.exercises.filter((exercise) => exercise.name != action.data.name)
            }
        case ADD_EXERCISE:
            console.log("adding exercise");
            debugger;
            return {
                ...state,
                exercises: state.exercises.push(action.data)
            }
        default:
            return state
    }
}
export default ExerciseReducer