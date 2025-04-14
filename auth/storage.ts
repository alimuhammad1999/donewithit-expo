
import { User } from '@/app/(tabs)';
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';

const key = "authToken";

const storeToken = async (token: string) => {
    try {
        await SecureStore.setItemAsync(key, token);
    } catch (e) {
        console.log("Error storing token", e);
    }
}

const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(key);
        return token;
    } catch (e) {
        console.log("Error getting token", e);
    }
}

const getUser = async () => {
    const token = await getToken();
    const user = jwtDecode(token as string);
    return user ? user as User : null;
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (e) {
        console.log("Error removing token", e);
    }
}

export default { storeToken, getUser, getToken, removeToken }