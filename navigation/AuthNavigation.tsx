import { createStackNavigator } from "@react-navigation/stack";
import WelcomScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import AccountScreen from "../Screens/AccountScreen";
import { Screen } from "../components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./NavigationTheme";
import routes from "./routes";
import RegisterScreen from "@/Screens/RegisterScreen";

interface AuthNavigationProps { }

const Stack = createStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name={routes.WELCOME} component={WelcomScreen} />
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
)

const AuthNavigation = (props: AuthNavigationProps) => {

    return (
        <AuthNavigator />
    );
};

export default AuthNavigation;