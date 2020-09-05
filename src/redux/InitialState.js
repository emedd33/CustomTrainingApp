import INITIAL_EXERCISE_STATE from "./ExercicseScreen/InitialExerciseState";
import INITIAL_HOME_STATE from "./ExercicseScreen/InitialProfileState";


const INITIAL_STATE = {
    profile: INITIAL_HOME_STATE,
    exercises: INITIAL_EXERCISE_STATE,
    routines: [{
        name: "Strength day 1",
        created: "2020-08-05",
        exercises: [],
        numberOfCompletion: 0
    },
    {
        name: "Strength day 2",
        created: "2020-07-04",
        exercises: [],
        numberOfCompletion: 0
    }],
};

export default INITIAL_STATE;