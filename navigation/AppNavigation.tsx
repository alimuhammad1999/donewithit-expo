import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";
import ListingScreen from "../Screens/ListingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingEditScreen from "../Screens/ListingEditScreen";
import AppIcon from "../components/AppIcon";
import AccountScreen from "../Screens/AccountScreen";
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigation";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";// Add at the top with other imports
import * as Notifications from 'expo-notifications';

// Configure notifications (add this before your component)
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

interface AppNavigationProps { }

const Tab = createBottomTabNavigator();
const TabNavigator = () => {

    const [expoPushToken, setExpoPushToken] = useState('');

    useEffect(() => {
        registerForPushNotifications();
    }, [])

    const registerForPushNotifications = async () => {
        let token;
        console.log("Registering for push notifications");
        const permission = await Notifications.requestPermissionsAsync()
        console.log(permission);
        // const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!permission.granted) return;
        console.log("Permission granted");
        const projectId =
            Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
        console.log("projectId", projectId);
        if (!projectId) {
            // throw new Error('Project ID not found');
            console.log('Project ID not found');
        }
        token = (
            await Notifications.getExpoPushTokenAsync({
                projectId,
            })
        ).data;
        console.log(token);
        // const token = await Notifications.getExpoPushTokenAsync();
        // console.log(token);
    }


    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: colors.danger,
            tabBarInactiveTintColor: colors.greyText,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.white, elevation: 10, height: '6%'
            },
        }} >
            <Tab.Screen name="Feed" component={FeedNavigator} options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size * 1.4} color={color} />
            }} />
            <Tab.Screen name="ListingEdit" component={ListingEditScreen} options={{
                tabBarLabel: '',
                tabBarIcon: ({ size }) => <AppIcon name="plus-circle" size={size * 2.5}
                    style={{
                        marginBottom: size * 1.1, borderWidth: 10, borderColor: 'white',
                        backgroundColor: colors.white, // Add background
                        borderRadius: size * 1.25
                    }} />,
                // headerLeftLabelVisible: false
            }} />
            <Tab.Screen name="AccountDetails" component={AccountNavigator} options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size * 1.4} color={color} />
            }} />
        </Tab.Navigator>
    )
}

const AppNavigation = () => {
    return (
        <TabNavigator />
    );
};

export default AppNavigation;