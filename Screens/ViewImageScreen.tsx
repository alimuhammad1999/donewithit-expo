import { FunctionComponent } from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Icon from 'react-native-vector-icons/FontAwesome';

interface ViewImageScreenProps {
    image: number,
}

const ViewImageScreen: FunctionComponent<ViewImageScreenProps> = ({ image }) => {
    return (
        <View style={styles.container} >
            <Icon name="close" style={styles.exit} size={35} />
            <Icon name="trash" size={35} style={styles.delete} />
            {/* <MaterialCommunityIcons name="trash-can" style={styles.delete} size={35} /> */}
            {/* <View style={styles.exit} /> */}
            {/* <View style={styles.delete} /> */}
            <Image source={image} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.black,
        alignItems: 'center', justifyContent: 'flex-start',
    }, image: {
        flex: 0.7, top: 150,
        resizeMode: 'contain'
    }, exit: {
        position: 'absolute',
        width: 50, height: 50,
        color: colors.primary,
        top: 20, left: 30
    }, delete: {
        position: 'absolute',
        width: 50, height: 50,
        color: colors.secondary,
        top: 20, right: 30
    }
});

export default ViewImageScreen;