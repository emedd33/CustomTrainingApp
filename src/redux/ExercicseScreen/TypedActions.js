import * as Actions from "./Actions"
export const addExercise = (exercise) => ({
    type: Actions.ADD_EXERCISE,
    data: exercise
})
export const deleteExercise = (exercise) => ({
    type: Actions.DELETE_EXERCISE,
    data: exercise
})