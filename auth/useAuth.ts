import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import { jwtDecode } from "jwt-decode";
import { User } from "@/app/(tabs)";

export default function useAuth() {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuth must be used within an AuthContext.Provider");
    }

    const { user, setUser } = authContext;

    const login = (token: string) => {
        const data = jwtDecode(token);
        setUser(data as User);
        authStorage.storeToken(token);
    };

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
    }

    const signup = (token: string) => {

    }

    return { user, login, logout };
}