

const updateRutineListFromRoutine = (updatedRoutine, routineList) => {
    const newRoutineList = JSON.parse(JSON.stringify(routineList));
    return newRoutineList.map(routine => {
        if (routine.id === updatedRoutine.id) {
            return updatedRoutine
        }
        return routine
    })

}
export default updateRutineListFromRoutine;