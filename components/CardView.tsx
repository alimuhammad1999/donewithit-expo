import { FunctionComponent } from "react";
import { GestureResponderEvent, Image as ImageN, ImageSourcePropType, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText.android";
import colors from "../config/colors";

interface CardViewProps {
    title: string,
    subTitle: string,
    image: string,
    imageStyle?: {},
    onPress?: ((event: GestureResponderEvent) => void) | undefined,
    thumbnailUrl: string,
}

const CardView: FunctionComponent<CardViewProps> = ({ title, subTitle, image, imageStyle = {}, onPress, thumbnailUrl }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.parent} >
                {/* <Image style={[styles.image, imageStyle]} resizeMode='cover' source={image} /> */}
                <Image style={[styles.image, imageStyle]} preview={{ uri: thumbnailUrl }} uri={image} tint="light" />
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>{subTitle}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center', flexDirection: 'column',
        height: 250, width: '100%', backgroundColor: colors.black
    },
    title: {
        fontSize: 25, margin: 7, marginLeft: 20
    },
    price: {
        fontSize: 16, margin: 7, marginLeft: 20,
        color: 'blue'
    },
    parent: {
        overflow: 'hidden',
        borderRadius: 25,
        margin: 2,
        marginBottom: 25,
        backgroundColor: colors.white, paddingBottom: 20,
    }
});

export default CardView;