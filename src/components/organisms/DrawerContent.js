import React from 'react';
import { Button, View } from 'react-native';
import DrawerHeader from '../Molecules/DrawerHeader';
import SidebarListItem from '../Molecules/SidebarListItem';
function DrawerContent({ navigation }) {
    return (
        <View>
            <DrawerHeader />
            <SidebarListItem text="Profile" action={() => navigation.navigate("Profile")} iconPath="Profile" />
            <SidebarListItem text="Workouts" action={() => navigation.navigate("Workouts")} iconPath="Workouts" />
            <SidebarListItem text="Routines" action={() => navigation.navigate("Routines")} iconPath="Routines" />
            <SidebarListItem text="Exercises" action={() => navigation.navigate("Exercises")} iconPath="Routines" />

        </View>
    );
}

export default DrawerContent