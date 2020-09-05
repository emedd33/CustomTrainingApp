import * as Actions from "./Actions"
export const addRoutine = (routine) => ({
    type: Actions.ADD_ROUTINE,
    data: routine
})
export const deleteRoutine = (routine) => ({
    type: Actions.DELETE_ROUTINE,
    data: routine
})