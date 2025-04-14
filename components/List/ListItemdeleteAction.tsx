import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FunctionComponent } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../../config/colors";
import Icon from 'react-native-vector-icons/FontAwesome';

interface ListItemDeleteActionProps {
    onPress: () => void
}

const ListItemDeleteAction: FunctionComponent<ListItemDeleteActionProps> = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container} >
                <Icon
                    name="trash"
                    size={35}
                    color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: '15%', height: '80%', marginBottom: 5,
        justifyContent: "center", alignSelf: 'center',
        alignItems: "center", top: 7, borderRadius: 5
    }
});

export default ListItemDeleteAction;