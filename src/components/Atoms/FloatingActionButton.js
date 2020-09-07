import React from "react";
import { View, StyleSheet } from 'react-native';
import Colors from "../../assets/Colors/Colors";
import { FloatingAction } from "react-native-floating-action";

const FloatingActionButton = ({ action }) => {
    return (
        <View style={styles.container}>

            <FloatingAction
                onPressMain={() => action()}
                showBackground={false}
                color={Colors.APP_RED}
                visible={true}
                iconWidth={20}
                iconHeight={20}
                floatingIcon={require("../../assets/icons/plus_icon.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        right: 0,
        position: 'absolute',
        top: 100
    }
});


export default FloatingActionButton;
