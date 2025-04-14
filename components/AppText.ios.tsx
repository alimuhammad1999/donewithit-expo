import { FunctionComponent } from "react";
import { StyleSheet, Text, TextProps, View } from "react-native";
import colors from "../config/colors";

interface AppTextProps extends TextProps {
    style?: object,
    children: React.ReactNode,
    onPress?: () => void,
}

const AppText: FunctionComponent<AppTextProps> = ({ children, style, onPress }) => {
    return (
        <Text style={[styles.text, style]} onPress={onPress}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'sanserif',
        fontSize: 12,
        color: colors.black
    }
});

export default AppText;