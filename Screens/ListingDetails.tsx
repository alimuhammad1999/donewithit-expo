import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText.android";
import ListItem from "../components/List/ListItem";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Listing } from "./ListingScreen";
import routes from "../navigation/routes";
import useAuth from "@/auth/useAuth";
import Screen from "@/components/Screen";

interface ListingDetailsProps {
}

const ListingDetails: FunctionComponent<ListingDetailsProps> = () => {
    const listing = useRoute().params as Listing;
    const { user } = useAuth();
    if (!listing) return null
    const navigator = useNavigation()

    return (
        <Screen>
            <View style={styles.parent} >
                <Image
                    style={styles.image}
                    preview={{ uri: listing.images[0].thumbnailUrl }}
                    uri={listing.images[0].url}
                    tint="light"
                />
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <AppText style={styles.description}>{listing.description}</AppText>
                <ListItem style={{ top: 30 }} title={user!.name} info="11 Ads"
                    image={require('./../assets/RM_logo.png')} onPress={() => navigator.navigate(routes.ACCOUNT_DETAILS as never)}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1
    }, image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        backgroundColor: colors.black
    },
    title: {
        fontSize: 30, margin: 5,
    },
    price: {
        fontSize: 20, marginLeft: 5,
        color: 'blue',
    },
    description: {
        fontSize: 20, marginLeft: 5, marginTop: 15, marginBottom: 30,
    },
});

export default ListingDetails;