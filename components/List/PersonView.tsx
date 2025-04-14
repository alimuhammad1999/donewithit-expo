import { FunctionComponent } from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import AppText from "../AppText.android";
import colors from "../../config/colors";
import { TextStyle } from "react-native";

interface PersonViewProps {
    image: number,
    title: string,
    info: string,
    style?: StyleProp<ViewStyle>
}

const PersonView: FunctionComponent<PersonViewProps> = ({ image, title, info, style }) => {
    return (
        <View style={[styles.parent, style]} >
            {image && <Image style={styles.image} source={image} />}
            <View >
                <AppText children={title} style={styles.title} />
                <AppText children={info} style={styles.description} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 80, height: 80, backgroundColor: 'black',
        borderRadius: 40, resizeMode: 'cover',
    }, parent: {
        flexDirection: 'row', borderWidth: 1,
        borderColor: colors.greyText, borderRadius: 15, marginTop: 10
    }, title: {
        fontSize: 25, marginTop: 2,
        fontWeight: '500', left: 10
    }, description: {
        fontSize: 17, marginTop: 5,
        color: colors.greyText, left: 10
    }
});

export default PersonView;