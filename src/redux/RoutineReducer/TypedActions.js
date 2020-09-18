import * as Actions from "./Actions"
export const addRoutine = (routine) => ({
    type: Actions.ADD_ROUTINE,
    data: routine
})
export const deleteRoutine = (routine) => ({
    type: Actions.DELETE_ROUTINE,
    data: routine
})

export const setSelectedRoutine = (routine) => ({
    type: Actions.SET_SELECTED_ROUTINE,
    data: routine
})

export const addExerciseToRoutine = (routine) => ({
    type: Actions.ADD_EXERCISE_TO_ROUTINE,
    data: routine
})

export const deleteExerciseFromRoutine = (routine) => ({
    type: Actions.DELETE_EXERCISE_FROM_ROUTINE,
    data: routine
})
export const updateRoutineName = (name, routineId) => ({
    type: Actions.UPDATE_ROUTINE_NAME,
    data: {
        name: name,
        routinId: routineId
    }
})