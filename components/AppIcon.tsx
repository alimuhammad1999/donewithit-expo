import { FunctionComponent } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from "../config/colors";

interface AppIconProps {
    name?: string,
    size?: number,
    iconColor?: string,
    backgroundColor?: any,
    style?: StyleProp<ViewStyle> | undefined
}

const AppIcon: FunctionComponent<AppIconProps> = ({ name = 'home', style, size = 25, iconColor = colors.white }) => {
    return (
        <View style={[styles.image, { width: size, height: size, borderRadius: size / 2 }, style,]} >
            <Icon
                name={name}
                size={size * 0.6}
                color={iconColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
});

export default AppIcon;