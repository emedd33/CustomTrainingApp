import { createStore, combineReducers } from "redux";
import HomeReducer from "./HomeScreen/HomeReducer";


// rootReducer which is used to create store for App.js
const rootReducer = combineReducers({
    HomeReducer: HomeReducer
});


const configureStore = () =>
    createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default configureStore;
