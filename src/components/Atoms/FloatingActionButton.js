import React from "react";
import PropTypes from "prop-types";

import ActionButton from "react-native-action-button";
import Colors from "../../assets/Colors/Colors";

const FloatingActionButton = (props) => {
    return (
        <ActionButton
            buttonColor={Colors.APP_RED}
            onPress={() => {
                if (props.onPress) {
                    props.onPress();
                }
                if (props.navigation) {
                    return props.navigation.navigate(props.redirect, {
                        params: props.params,
                    });
                }
            }}
            hideShadow={true}
        ></ActionButton>
    );
};


FloatingActionButton.propTypes = {
    navigation: PropTypes.object,
    onPress: PropTypes.object,
};

export default FloatingActionButton;
