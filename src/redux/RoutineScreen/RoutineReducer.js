import { DELETE_ROUTINE, ADD_ROUTINE } from "./Actions";
import moment from 'moment';

const { default: INITIAL_ROUTINE_STATE } = require("./InitialRoutineState");

const RoutineReducer = (state = INITIAL_ROUTINE_STATE, action) => {
    switch (action.type) {
        case DELETE_ROUTINE: {
            return state.filter((routine) => routine.id != action.data)
        }
        case ADD_ROUTINE: {
            const newRoutineList = JSON.parse(JSON.stringify(state));
            let newId = Math.max(...state.map(routine => routine.id)) + 1
            newRoutineList.push(
                {
                    name: "New routine",
                    id: newId,
                    created: moment().format('yyyy-mm-dd'),
                    lastDone: null,
                    exercises: [],
                    numberOfCompletion: 0
                })
            return newRoutineList
        }
        default:
            return state
    }
}
export default RoutineReducer