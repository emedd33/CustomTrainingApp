import React from "react";
import Colors from "../../assets/Colors/Colors";
import { FloatingAction } from "react-native-floating-action";

const FloatingActionButton = ({ action }) => {
    return (
        <FloatingAction
            onPressMain={() => action()}
            showBackground={false}
            color={Colors.APP_RED}
            visible={true}
            iconWidth={20}
            iconHeight={20}
            floatingIcon={require("../../assets/icons/plus_icon.png")}
        />
    );
};



export default FloatingActionButton;
