import { Listing } from "../Screens/ListingScreen";

export default Object.freeze({
    LISTING_DETAILS: "ListingDetails",
    LISTING_SCREEN: "ListingScreen",
    ACCOUNT: "Account",
    ACCOUNT_DETAILS: "AccountDetails",
    MESSAGES: "Messages",
    LOGIN: "Login",
    REGISTER: "Register",
    WELCOME: "Welcome",
})

export type RootStackParamList = {
    ListingDetails: Listing;
    AccountDetails: undefined;
};