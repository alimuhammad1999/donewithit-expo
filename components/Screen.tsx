import React from "react";
import Constants from "expo-constants";

import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import OfflineNotice from "./OfflineNotice";

type ScreenProps = {
    children?: React.ReactNode;
    style?: object;
};
export const Screen = ({ children, style }: ScreenProps) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <OfflineNotice />
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
});

export default Screen;
