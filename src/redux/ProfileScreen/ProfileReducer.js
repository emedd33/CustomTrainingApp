const { default: INITIAL_HOME_STATE } = require("./InitialProfileState");

const ProfileReducer = (state = INITIAL_HOME_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default ProfileReducer