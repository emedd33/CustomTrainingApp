import { DELETE_ROUTINE, ADD_ROUTINE, SET_SELECTED_ROUTINE, ADD_EXERCISE_TO_ROUTINE, DELETE_EXERCISE_FROM_ROUTINE } from "./Actions";
import dayjs from "dayjs";

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
                    created: dayjs(),
                    lastDone: null,
                    exercises: [],
                    numberOfCompletion: 0
                })
            return {
                ...state,
                routineList: newRoutineList
            }
        }
        case ADD_EXERCISE_TO_ROUTINE: {
            return { ...state }
        }
        case DELETE_EXERCISE_FROM_ROUTINE: {
            const newExerciseList = state.selectedRoutine.exercises.filter(exercise => exercise.id !== action.data)
            const newRoutine = { ...state.selectedRoutine, exercises: newExerciseList }
            return {
                ...state,
                selectedRoutine: newRoutine,
                routineList: state.routineList.map(routine => {
                    if (routine.id === newRoutine.id) {
                        return newRoutine
                    }
                    return routine
                })

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