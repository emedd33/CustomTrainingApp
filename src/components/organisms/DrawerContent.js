import React from 'react';
import { Button, View } from 'react-native';
import DrawerHeader from '../Molecules/DrawerHeader';
import SidebarListItem from '../Molecules/SidebarListItem';
function DrawerContent({ navigation }) {
    return (
        <View>
            <DrawerHeader />
            <SidebarListItem text="Home" action={() => navigation.navigate("Home")} iconPath="Home" />
            <SidebarListItem text="Workouts" action={() => navigation.navigate("Workouts")} iconPath="Workouts" />
            <SidebarListItem text="Routines" action={() => navigation.navigate("Routines")} iconPath="Routines" />
        </View>
    );
}

export default DrawerContent