import { FunctionComponent, useState } from "react";
import { Screen } from "../components/Screen";
import { Image, StyleSheet, View } from "react-native";
import * as yup from 'yup';
import AuthApi, { login } from "../api/auth";
import { AppFrormField, SubmitButton, AppFrorm, FormErrorMessage } from '../components/Form'
import { FormikValues } from "formik";
import useAuth from "@/auth/useAuth";
import authApi from "@/api/auth";
import useApi from "@/api/useApi";
import ActivityIndicator from "@/components/ui/ActivityIndicator";

const validationSchema = yup.object().shape({
    name: yup.string().required().min(3).label("Name"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password")
})

const RegisterScreen = () => {
    const registerApi = useApi(AuthApi.register);
    const loginApi = useApi(authApi.login);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const auth = useAuth();
    const handleSubmit = async ({ name, email, password }: FormikValues) => {
        try {
            const response = await registerApi.request({ name, email, password });
            if (!response.ok) {
                console.log("Registration failed", response.data);
                const data = response.data as { error: string };
                setErrorMessage(data.error);
                setError(true);
            } else {
                setError(false);
                console.log("Registration successful", response.data);
                const loginResponse = await loginApi.request({ email, password })
                if (!loginResponse.ok) {
                    setErrorMessage("Registration Sucessfull but unable to login")
                    setError(true);
                    console.log("Login failed", loginResponse.data);
                } else {
                    setError(false);
                    auth.login(loginResponse.data as string);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    const [hidePassword, setHidePassword] = useState(true)
    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen >
                <View style={{ flex: 1 }}>
                    <Image style={styles.logo} source={require("../assets/RM_logo.png")} />
                    <View style={styles.inputContainer} >
                        <AppFrorm
                            initialValues={{ name: '', email: '', password: '' }}
                            onSubmit={handleSubmit} validationSchema={validationSchema}>
                            <FormErrorMessage message={errorMessage} visible={error} />
                            <AppFrormField
                                icon="account" placeholder="John"
                                keyboardType="default" autoCorrect={false}
                                name="name" textContentType="username"
                                placeholderTextColor={'#D4D4D4'} />
                            <AppFrormField
                                icon="mail" placeholder="youremail@example.com" autoCapitalize="none"
                                keyboardType="email-address" autoCorrect={false}
                                name="email" textContentType="emailAddress"
                                placeholderTextColor={'#D4D4D4'} />
                            <AppFrormField
                                icon={hidePassword ? "eye-off-outline" : "eye-outline"} placeholder="**********"
                                secureTextEntry={hidePassword} autoCapitalize="none" autoCorrect={false}
                                textContentType="password" name="password"
                                placeholderTextColor={'#D4D4D4'}
                                onIconPress={() => setHidePassword(!hidePassword)} />
                            <SubmitButton title="SignUp" />
                        </AppFrorm>
                    </View>
                </View>
            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: '14%', width: '30%', resizeMode: 'cover',
        alignSelf: 'center', marginTop: '20%',
    }, inputContainer: {
        marginTop: '12%', width: '95%', alignSelf: 'center'
    }
})

export default RegisterScreen;