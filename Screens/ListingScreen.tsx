import { useEffect, useState } from "react";
import { Screen } from "../components/Screen";
import CardView from "../components/CardView";
import { FlatList, StyleSheet, RefreshControl } from "react-native";
import colors from "../config/colors";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/routes";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import ActivityIndicator from "@/components/ui/ActivityIndicator";
import useApi from "@/api/useApi";
import { useNetInfo } from "@react-native-community/netinfo";

export interface Listing {
    id: number,
    title: string,
    price: number,
    images: images[],
    description: string,
}

export interface images {
    url: string,
    thumbnailUrl: string
}

const ListingScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { data: listings, error, loading, request } = useApi<Listing[]>(listingsApi.getListings);
    const [connected, setConnected] = useState(false);

    const netInfo = useNetInfo();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            request();
            setRefreshing(false);
        }, 2000);
    };

    useEffect(() => {
        if (netInfo.isInternetReachable !== null) {
            setConnected(netInfo.isInternetReachable);
        }
    }, [netInfo.isInternetReachable]);

    useEffect(() => {
        request()
    }, []);

    useEffect(() => {
        if (connected) request(); // Re-fetch when connection is restored
    }, [connected]);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen} >
                <FlatList
                    data={listings[0]}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <CardView
                            thumbnailUrl={item.images[0].thumbnailUrl}
                            title={item.title}
                            subTitle={"$" + item.price}
                            image={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={['grey']}
                            progressBackgroundColor={'black'}
                        />
                    }
                />
            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingVertical: 5, backgroundColor: colors.veryLightGrey
    }
});


// const Listings: Array<Listing> = [
//     {
//         id: 1,
//         title: "Royal Madrid Logo",
//         price: 50,
//         image: require('../assets/RM_logo.png')
//     },
//     {
//         id: 2,
//         title: "Royal Madrid Bg Screen",
//         price: 500,
//         image: require('../assets/RMHomeSC.jpg')
//     },
//     {
//         id: 3,
//         title: "Random Iphone SS",
//         price: 500000000,
//         image: require("../assets/photo.png")
//     },
//     {
//         id: 4,
//         title: "Random Wide photo 1:2",
//         price: 5,
//         image: require("../assets/AspectRatio.jpg")
//     },
// ]

export default ListingScreen;