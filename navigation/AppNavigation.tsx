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
import Notifications from "expo-notifications";
import AccountNavigator from "./AccountNavigation";
import { Platform, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

interface AppNavigationProps { }

const Tab = createBottomTabNavigator();
const TabNavigator = () => {

    const [expoPushToken, setExpoPushToken] = useState('');

    useEffect(() => {
        registerForPushNotifications();
        registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

    }, [])

    const registerForPushNotifications = async () => {
        console.log("Registering for push notifications");
        const permission = await Notifications.requestPermissionsAsync()
        console.log(permission);
        // const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!permission.granted) return;
        const token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
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
            <Tab.Screen name="Details" component={ListingEditScreen} options={{
                tabBarLabel: '',
                tabBarIcon: ({ size }) => <AppIcon name="plus-circle" size={size * 2.5}
                    style={{ marginBottom: size * 1.1, borderWidth: 10, borderColor: 'white' }} />,
                // headerLeftLabelVisible: false
            }} />
            <Tab.Screen name="AccountDetails" component={AccountNavigator} options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size * 1.4} color={color} />
            }} />
        </Tab.Navigator>
    )
}

async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        const channel = await Notifications.setNotificationChannelAsync('myNotificationChannel', {
            name: 'A channel is needed for the permissions prompt to appear',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
        console.log('Channel created:', channel);
    }

    if (Device.isDevice) {
        console.log('Device is a physical device!!!');

        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        try {
            const projectId =
                Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
            if (!projectId) {
                throw new Error('Project ID not found');
            }
            token = (
                await Notifications.getExpoPushTokenAsync({
                    projectId,
                })
            ).data;
            console.log(token);
        } catch (e) {
            token = `${e}`;
        }
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}

const AppNavigation = () => {
    return (
        <TabNavigator />
    );
};

export default AppNavigation;