import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../Screens/AccountScreen";
import MessagesScreen from "../Screens/MessagesScreen";
import routes from "./routes";
import ListingScreen from "@/Screens/ListingScreen";

interface AccountNavigatorProps {
}

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }} >
        <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
        <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
)


const AccountNavigator = (props: AccountNavigatorProps) => {

    return (
        <StackNavigator />
    );
};

export default AccountNavigator;