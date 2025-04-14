import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

import colors from '../config/colors';

type Props = {
    title?: string,
    onPress?: () => void,
    color?: string,
    style?: ViewStyle,
}

function AppButton({ title, onPress, color = colors.primary, style }: Props) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }, style]} onPress={onPress} activeOpacity={0.75} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10, backgroundColor: colors.primary,
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 20, padding: 15, width: '100%'
    },
    text: {
        fontSize: 18,
        color: colors.white,
        textTransform: 'uppercase', fontWeight: 'bold'
    }
});

export default AppButton;