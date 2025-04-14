import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "./AppText.android";
import { items } from "./AppPicker";

type PickerItemProps = {
    item: items
    onPress?: () => void;
};

function PickerItem({ item, onPress }: PickerItemProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
});

export default PickerItem;
