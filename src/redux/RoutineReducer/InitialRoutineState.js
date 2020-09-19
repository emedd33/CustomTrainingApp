import CategoryType from "../../assets/StringConst/CategoryType"

const INITIAL_ROUTINE_STATE = {
    selectedRoutineId: null,
    routineList:
        [{
            id: 1,
            name: "Strength day 1",
            created: "2020-08-05",
            lastDone: "2020-08-05",
            exercises: [
                {
                    id: 1,
                    name: "Pullups",
                    type: CategoryType.STRENGTH,
                    sets: 3,
                    reps: 8,
                    weight: 10
                },
                {
                    id: 2,
                    name: "Pushups",
                    type: CategoryType.STRENGTH,
                    sets: 3,
                    reps: 8,
                    weight: 0
                }

            ],
            numberOfCompletion: 0
        },
        {
            id: 2,
            name: "Strength day 2",
            created: "2020-07-04",
            lastDone: "2020-07-04",
            exercises: [{
                id: 1,
                name: "Pushups",
                type: CategoryType.STRENGTH,
                sets: 3,
                reps: 8,
                weight: 0
            }],
            numberOfCompletion: 0
        }]

}

export default INITIAL_ROUTINE_STATE 