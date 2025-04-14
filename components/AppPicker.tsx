// import { FunctionComponent, useState } from "react";
// import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome6';
// import colors from "../config/colors";
// import Styles from "../config/Styles";
// import AppText from "./AppText.android";

// export interface AppPickerProps {
//     icon?: string,
//     placeholder?: string,
//     selectedItem?: items,
//     items: Array<items>,
//     onSelectItem: (a?: items) => void,
//     PickerItemComponent?: any,
// }

// export interface items {
//     lable: string,
//     value: number,
// }

// const AppPicker: FunctionComponent<AppPickerProps> = ({ icon, onSelectItem, selectedItem, items, PickerItemComponent = AppText, placeholder }) => {
//     const [modalVisible, setModalVisible] = useState(false)
//     return (
//         <>
//             <TouchableWithoutFeedback style={styles.container} onPress={() => { setModalVisible(true) }} >
//                 <View style={styles.container} >
//                     {icon && <Icon name={icon} color={colors.black} size={22} />}
//                     <AppText style={styles.text} >{selectedItem ? selectedItem.lable : placeholder}</AppText>
//                     <Icon name="chevron-down" color={colors.black} size={16} />
//                 </View>
//             </TouchableWithoutFeedback>
//             <Modal visible={modalVisible} animationType="fade" transparent={true}  >
//                 <View style={styles.popup} >
//                     <Button title="Close" onPress={() => {
//                         setModalVisible(false);
//                         onSelectItem(undefined)
//                     }}
//                     />
//                     <FlatList
//                         data={items} keyExtractor={(o) => o.value.toString()}
//                         style={{ top: 30 }}
//                         renderItem={({ item }) => <PickerItemComponent onPress={() => {
//                             setModalVisible(false)
//                             onSelectItem(item)
//                         }} style={{ fontSize: 20, marginVertical: 9, alignSelf: 'center' }}>{item.lable}</PickerItemComponent>}
//                     />
//                 </View>
//             </Modal>
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         borderRadius: 25, flexDirection: "row",
//         backgroundColor: colors.veryLightGrey, alignItems: 'center',
//         paddingHorizontal: 10, alignSelf: 'center', marginVertical: 7,
//         paddingVertical: 10, borderColor: colors.veryLightGrey, borderWidth: 5
//     }, text: {
//         marginHorizontal: 10, fontSize: 20, flex: 1,
//         fontFamily: Styles.AppFont, color: colors.darkGrey,
//     }, popup: {
//         justifyContent: 'center', alignItems: 'center',
//         marginTop: 20, backgroundColor: colors.white,
//         margin: 80, borderRadius: 20, padding: 15,
//         shadowColor: '#000', width: '60%', height: '40%',
//         alignSelf: 'center'
//     }
// });

// export default AppPicker;

import React, { useState } from "react";
import {
    View,
    StyleSheet,
    DimensionValue,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./AppText.android";
import defaultStyles from "../config/Styles";
import { colors } from "../config/Styles";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

export interface AppPickerProps {
    icon?: any,
    placeholder?: string,
    selectedItem?: items,
    width?: DimensionValue,
    numberOfColumns?: number,
    items: Array<items>,
    onSelectItem: (a?: items) => void,
    PickerItemComponent?: any,
}

export interface items {
    label: string,
    value: number,
}

function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%",
}: AppPickerProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <Text style={styles.text}>{selectedItem.label}</Text>
                    ) : (
                        <Text style={styles.placeholder}>{placeholder}</Text>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.light, borderRadius: 25,
        flexDirection: "row", padding: 15, marginVertical: 10,
    },
    icon: { marginRight: 10 },
    placeholder: { color: colors.medium, flex: 1 },
    text: { flex: 1 }
});

export default AppPicker;
