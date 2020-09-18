import { DELETE_ROUTINE, ADD_ROUTINE, SET_SELECTED_ROUTINE, ADD_EXERCISE_TO_ROUTINE, DELETE_EXERCISE_FROM_ROUTINE, UPDATE_ROUTINE_NAME } from "./Actions";
import dayjs from "dayjs";
import updateRutineListFromRoutine from "./updateRoutineState"

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
            const newRoutineExerciseList = JSON.parse(JSON.stringify(state.selectedRoutine.exercises));
            let newId = Math.max(...state.selectedRoutine.exercises.map(exercise => exercise.id)) + 1
            newRoutineExerciseList.push(
                {
                    name: action.data.name,
                    id: newId,
                    type: action.data.type,
                    sets: 3,
                    reps: 8,
                    weight: 0
                })
            const newSelectedRoutine = {
                ...state.selectedRoutine,
                exercises: newRoutineExerciseList
            }
            return {
                ...state,
                selectedRoutine: newSelectedRoutine,
                routineList: updateRutineListFromRoutine(newRoutineExerciseList, state.routineList)
            }
        }
        case DELETE_EXERCISE_FROM_ROUTINE: {
            const newExerciseList = state.selectedRoutine.exercises.filter(exercise => exercise.id !== action.data)
            const updatedRoutine = { ...state.selectedRoutine, exercises: newExerciseList }
            return {
                ...state,
                selectedRoutine: updatedRoutine,
                routineList: updateRutineListFromRoutine(updatedRoutine, state.routineList)
            }
        }
        case UPDATE_ROUTINE_NAME: {
            const updatedRoutine = {
                ...state.selectedRoutine,
                name: action.data.name
            }
            return {
                ...state,
                selectedRoutine: updatedRoutine,
                routineList: updateRutineListFromRoutine(updatedRoutine, state.routineList)
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
export const getSelectedRoutine = (state) => state.routines.selectedRoutine
export const getRoutineList = (state) => state.routines.routineList