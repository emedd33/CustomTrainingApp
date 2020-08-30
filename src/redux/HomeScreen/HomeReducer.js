const { default: INITIAL_STATE } = require("../InitialState");
const { INCREMENT } = require("./Actions");

const HomeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return state
        default:
            return state
    }
}
export default HomeReducer