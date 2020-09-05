import { createStore, combineReducers } from "redux";
import ExerciseReducer from "./ExercicseScreen/ExerciseReducer";
import ProfileReducer from "./ProfileScreen/ProfileReducer";


// rootReducer which is used to create store for App.js
const rootReducer = combineReducers({
    ProfileReducer: ProfileReducer,
    ExerciseReducer: ExerciseReducer
});


const configureStore = () =>
    createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default configureStore;
