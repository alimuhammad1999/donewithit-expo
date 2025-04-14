import React, { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import colors from '../config/colors';
import { FormikErrors, FormikValues } from 'formik';

interface AppTextProps extends TextProps {
    style?: StyleProp<TextStyle>,
    children: any | React.ReactNode,
    onPress?: () => void,
}

const AppText: FunctionComponent<AppTextProps> = ({ style, children, ...otherProps }) => {
    return (
        <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        // fontFamily: '',
        fontSize: 20,
        color: colors.darkGrey
    }
});

export default AppText;

interface AppTextProps {
    message?: FormikErrors<FormikValues>[keyof FormikValues];
    // Add other props as needed
}
