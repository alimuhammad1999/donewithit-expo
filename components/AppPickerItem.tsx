import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "./AppIcon";
import Text from "./AppText.android";
import { items } from "./AppPicker";
import { Category } from "@/Screens/ListingEditScreen";

type CategoryPickerItemProps = {
    item: Category,
    onPress?: () => void
}

function CategoryPickerItem({ item, onPress }: CategoryPickerItemProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    style={{ backgroundColor: item.backgroundColor }}
                    name={item.icon}
                    size={80}
                />
            </TouchableOpacity>
            <Text style={styles.label}>{item.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    },
});

export default CategoryPickerItem;
