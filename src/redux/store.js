import { createStore, combineReducers } from "redux";
import ExerciseReducer from "./ExercicseReducer";
import ProfileReducer from "./ProfileReducer";
import RoutineReducer from "./RoutineReducer";


// rootReducer which is used to create store for App.js
const rootReducer = combineReducers({
    profile: ProfileReducer,
    exercises: ExerciseReducer,
    routines: RoutineReducer,
});


const configureStore = () =>
    createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default configureStore;
