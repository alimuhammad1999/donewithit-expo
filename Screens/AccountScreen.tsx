import { FunctionComponent, useContext } from "react";
import ListItem from "../components/List/ListItem";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppIcon from "../components/AppIcon";
import { Screen } from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";
import AuthContext from "@/auth/context";
import authStorage from "@/auth/storage";
import useAuth from "@/auth/useAuth";

interface AccountScreenProps {

}

interface MenuItem {
    title: string,
    icon: IconObj,
    targetScreen: string,
}

interface IconObj {
    name: string,
    bg: string
}

const menuItems: Array<MenuItem> = [
    {
        title: "My Listings",
        icon: {
            name: "bars",
            bg: colors.primary
        },
        targetScreen: routes.LISTING_SCREEN
    }, {
        title: "Messges",
        icon: {
            name: "envelope",
            bg: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
]

const AccountScreen: FunctionComponent<AccountScreenProps> = () => {
    const navigator = useNavigation();
    const { user, logout } = useAuth();

    return (
        <Screen >
            <View style={styles.container} >
                <View style={{ flex: 0.20 }} >
                    <ListItem
                        title={user!.name} info={user!.email}
                        image={require("../assets/RM_logo.png")} />
                </View>
                <View style={{ flex: 0.25, marginBottom: 10, }} >
                    <FlatList
                        data={menuItems}
                        keyExtractor={(o) => o.title}
                        renderItem={({ item }) =>
                            <ListItem
                                onPress={() => navigator.navigate(item.targetScreen as never)}
                                title={item.title} style={styles.listItem}
                                IconComponent={<AppIcon name={item.icon.name} style={{ backgroundColor: item.icon.bg }} />}
                            />}
                    />
                </View>
                <ListItem
                    title={"Logout"}
                    IconComponent={< AppIcon name={"sign-out-alt"} style={{ backgroundColor: "#cfd803" }} />}
                    onPress={logout}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    listItem: {
        paddingVertical: 5
    }, container: {
        paddingTop: 10, flex: 1
    }, lastContainer: {

    }
});

export default AccountScreen;