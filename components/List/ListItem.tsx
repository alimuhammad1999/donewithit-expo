import { FunctionComponent } from "react";
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText.android";
import AppIcon from "../AppIcon";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ListItemProps {
    image?: number,
    title: string,
    info?: string,
    showBorder?: boolean,
    style?: object,
    onPress?: () => void,
    renderRightActions?: any
    IconComponent?: React.ReactNode;
}

const ListItem: FunctionComponent<ListItemProps> = ({ showBorder = false, image, title, IconComponent, info, style = {}, onPress, renderRightActions }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    {info && (
                        <Text style={styles.subTitle} numberOfLines={2}>
                            {info}
                        </Text>
                    )}
                </View>
                <MaterialCommunityIcons
                    color={colors.greyText}
                    name="chevron-right"
                    size={25}
                />
            </View></TouchableWithoutFeedback>
        // <GestureHandlerRootView >
        //     <Swipeable renderRightActions={renderRightActions} >
        //         <TouchableHighlight
        //             onPress={onPress} underlayColor={colors.greyText}>
        //             <View style={[styles.parent, showBorder ? styles.border : {}, style]} >
        //                 {Iconcomponent}
        //                 {image && <Image style={styles.imageStyle} source={image} />}
        //                 <View style={styles.textContainer}>
        //                     <AppText children={title} style={styles.title} numberOfLines={1} />
        //                     {info && <AppText children={info} style={styles.description} numberOfLines={2} />}
        //                 </View>
        //                 <AppIcon
        //                     style={{ backgroundColor: undefined, alignSelf: 'center' }} name="chevron-right"
        //                     iconColor="black" size={20}
        //                 />
        //             </View>
        //         </TouchableHighlight>
        //     </Swipeable>
        // </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.white, borderRadius: 10,
    }, imageStyle: {
        width: 80, height: 80,
        borderRadius: 40, resizeMode: 'cover',
    }, parent: {
        flexDirection: 'row', marginTop: 10, flex: 1, height: 300,
        paddingHorizontal: 10, marginStart: 5, backgroundColor: colors.black,
    }, title: {
        fontSize: 20, marginTop: 2,
        fontWeight: '400',
    }, description: {
        fontSize: 12, marginTop: 5,
        color: colors.greyText,
    }, textContainer: {
        marginLeft: 10, flexDirection: 'column', flex: 1, marginTop: 2
    }, border: {
        borderWidth: 1, paddingVertical: 5,
        borderColor: colors.greyText, borderRadius: 15,
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.greyText,
    },
    // title: {
    //     fontWeight: "500",
    // },
});

export default ListItem;