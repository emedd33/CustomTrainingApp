import React from 'react';
import { Button, View } from 'react-native';
import DrawerHeader from '../Molecules/DrawerHeader';
function DrawerContent({ navigation }) {
    return (
        <View>
            <DrawerHeader />
            <Button
                title="Home"
                onPress={() => {
                    navigation.navigate("Home")
                }}
            />
            <Button
                title="Workouts"
                onPress={() => {
                    navigation.navigate("Workouts")

                }}
            />
            <Button
                title="Routines"
                onPress={() => {
                    navigation.navigate("Routines");
                }}
            />
        </View>
    );
}

export default DrawerContent