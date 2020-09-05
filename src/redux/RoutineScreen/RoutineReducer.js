import { DELETE_ROUTINE } from "./Actions";

const { default: INITIAL_ROUTINE_STATE } = require("./InitialRoutineState");

const RoutineReducer = (state = INITIAL_ROUTINE_STATE, action) => {
    switch (action.type) {
        case DELETE_ROUTINE: {
            return state.filter((routine) => routine.name != action.data.name)
        }
        default:
            return state
    }
}
export default RoutineReducer