import { FunctionComponent } from "react";
import AppText from "../AppText.android";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FormikErrors, FormikValues } from "formik";

interface FormErrorMessageProps {
    message?: FormikErrors<FormikValues>[keyof FormikValues],
    visible?: boolean | undefined,
}

const FormErrorMessage: FunctionComponent<FormErrorMessageProps> = ({ message, visible }) => {
    if (!message || !visible) return null
    return (
        <View style={styles.container} >
            <MaterialCommunityIcons name="exclamation-thick" style={styles.text} />
            <AppText style={styles.text} >{message}</AppText>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center',
    },
    text: {
        fontSize: 14, color: 'red', marginLeft: 4,
    }
});

export default FormErrorMessage;