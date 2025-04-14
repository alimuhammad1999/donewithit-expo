import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../Screens/ListingScreen";
import ListingDetails from "../Screens/ListingDetails";
import AccountScreen from "../Screens/AccountScreen";
import routes from "./routes";

interface FeedNavigatorProps {
}

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} >
        <Stack.Screen name={routes.LISTING_SCREEN} component={ListingScreen} />
        <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetails} />
        <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    </Stack.Navigator>
)


const FeedNavigator = (props: FeedNavigatorProps) => {
    return (
        <StackNavigator />
    );
};

export default FeedNavigator;