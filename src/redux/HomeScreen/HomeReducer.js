const { default: INITIAL_HOME_STATE } = require("./InitialHomeState");

const HomeReducer = (state = INITIAL_HOME_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default HomeReducer