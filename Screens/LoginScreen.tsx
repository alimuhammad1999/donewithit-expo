import { FunctionComponent, useState } from "react";
import { Screen } from "../components/Screen";
import { Image, StyleSheet, View } from "react-native";
import * as yup from 'yup';
import AuthApi from "../api/auth";
import { AppFrormField, SubmitButton, AppFrorm, FormErrorMessage } from '../components/Form'
import { FormikValues } from "formik";
import useAuth from "@/auth/useAuth";

interface LoginScreenProps {
}

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password")
})

const LoginScreen: FunctionComponent<LoginScreenProps> = () => {
    const { login } = useAuth();
    const [error, setError] = useState(false);
    const handleSubmit = async ({ email, password }: FormikValues) => {
        try {
            const response = await AuthApi.login({ email, password });
            if (!response.ok) {
                console.log("Login failed", response.data);
                setError(true);
            } else {
                setError(false);
                login(response.data as string);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [hidePassword, setHidePassword] = useState(true)
    return (
        <Screen >
            <View style={{ flex: 1 }}>
                <Image style={styles.logo} source={require("../assets/RM_logo.png")} />
                <View style={styles.inputContainer} >
                    <AppFrorm
                        initialValues={{ email: '', password: ''}}
                        onSubmit={handleSubmit} validationSchema={validationSchema}>
                        <FormErrorMessage message="Invalid email or password" visible={error} />
                        <AppFrormField
                            icon="account" placeholder="youremail@example.com" autoCapitalize="none"
                            keyboardType="email-address" autoCorrect={false}
                            name="email" textContentType="emailAddress"
                            placeholderTextColor={'#D4D4D4'} />
                        <AppFrormField
                            icon={hidePassword ? "eye-off-outline" : "eye-outline"} placeholder="**********"
                            secureTextEntry={hidePassword} autoCapitalize="none" autoCorrect={false}
                            textContentType="password" name="password"
                            placeholderTextColor={'#D4D4D4'}
                            onIconPress={() => setHidePassword(!hidePassword)} />
                        <SubmitButton title="Login" />
                    </AppFrorm>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: '14%', width: '30%', resizeMode: 'cover',
        alignSelf: 'center', marginTop: '20%',
    }, inputContainer: {
        marginTop: '12%', width: '95%', alignSelf: 'center'
    }
})

export default LoginScreen;