import { FunctionComponent } from "react";
import { StyleSheet, TextInput, View, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Styles from "../config/Styles";

export interface AppTextInputProp extends TextInputProps {
    icon?: any,
    onIconPress?: () => void,
}

const AppTextInput: FunctionComponent<AppTextInputProp> = ({ icon, onIconPress, ...otherProps }) => {
    return (
        <View style={styles.container} >
            {icon && <MaterialCommunityIcons name={icon} solid color={colors.black} size={22} onPress={onIconPress} />}
            <TextInput style={styles.textInput}  {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 35, flexDirection: "row", width: '100%',
        backgroundColor: colors.veryLightGrey, alignItems: 'center',
        paddingHorizontal: 10, marginVertical: 10,
        borderColor: colors.veryLightGrey, borderWidth: 5
    }, textInput: {
        marginHorizontal: 3, fontSize: 20, flex: 1, alignSelf: 'center',
        fontFamily: Styles.AppFont, color: colors.darkGrey,
    }
});

export default AppTextInput;