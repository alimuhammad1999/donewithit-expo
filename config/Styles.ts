import { ErrorMessage } from "formik";
import { Platform } from "react-native";

export default {
    AppFont: Platform.OS === "android" ? "Roboto" : "Avenir",
    white: '#fff',
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    black: '#000',
    greyText: '#696969',
    lightGrey: '#CDCDCD',
    veryLightGrey: '#EEEEEE',
    darkGrey: '#2B2B2B',
    danger: "#ff5252",
}

export const error = {
    fontSize: 12, color: 'red', marginLeft: 4
}

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const colors = {
    primary: "#fc5c65",
    secondary: "#4ecdc4",
    black: "#000",
    white: "#fff",
    medium: "#6e6969",
    light: "#f8f4f4",
    dark: "#0c0c0c",
    danger: "#ff5252",
    // light: {
    //     text: '#11181C',
    //     background: '#fff',
    //     tint: tintColorLight,
    //     icon: '#687076',
    //     tabIconDefault: '#687076',
    //     tabIconSelected: tintColorLight,
    // },
    // dark: {
    //     text: '#ECEDEE',
    //     background: '#151718',
    //     tint: tintColorDark,
    //     icon: '#9BA1A6',
    //     tabIconDefault: '#9BA1A6',
    //     tabIconSelected: tintColorDark,
    // },
};