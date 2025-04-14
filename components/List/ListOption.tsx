import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText.android";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppIcon from "../AppIcon";
// import Icon from 'react-native-ionicons';

interface ListOptionProps {
    imageStyle: {},
    icon: string,
    text: string,
    size: number,
    iconColor: string,
}

const ListOption: FunctionComponent<ListOptionProps> = ({ text = 'Home', icon = 'home', imageStyle = {}, size = 40, iconColor = colors.white }) => {
    return (
        <View style={styles.container} >
            <AppIcon icon={icon} size={size} />
            <AppText style={[styles.text, { fontSize: size * 0.5 }]} >{text}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', height: 50, paddingHorizontal: 5,
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: colors.white
    }, text: {
        marginLeft: 10, fontSize: 20,
    }
});

export default ListOption;