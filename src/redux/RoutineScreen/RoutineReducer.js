import { DELETE_ROUTINE, ADD_ROUTINE, SET_SELECTED_ROUTINE } from "./Actions";
import moment from 'moment';

const { default: INITIAL_ROUTINE_STATE } = require("./InitialRoutineState");

const RoutineReducer = (state = INITIAL_ROUTINE_STATE, action) => {
    switch (action.type) {
        case DELETE_ROUTINE: {
            return {
                ...state,
                routineList: state.routineList.filter((routine) => routine.id != action.data)
            }
        }
        case ADD_ROUTINE: {
            const newRoutineList = JSON.parse(JSON.stringify(state.routineList));
            let newId = Math.max(...state.routineList.map(routine => routine.id)) + 1
            newRoutineList.push(
                {
                    name: "New routine",
                    id: newId,
                    created: moment().format('yyyy-mm-dd'),
                    lastDone: null,
                    exercises: [],
                    numberOfCompletion: 0
                })
            return {
                ...state,
                routineList: newRoutineList
            }
        }
        case SET_SELECTED_ROUTINE: {
            return {
                ...state,
                selectedRoutine: action.data
            }
        }
        default:
            return state
    }
}
export default RoutineReducer