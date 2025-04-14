import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import AppIcon from "./AppIcon";
import colors from "../config/colors";
import * as ImagePicker from 'expo-image-picker'
import { FunctionComponent, useEffect } from "react";

interface ImageInputProps {
    imageUri: string
    onChangeImage: (imageUri: string) => void,
}

const ImageInput: FunctionComponent<ImageInputProps> = ({ imageUri, onChangeImage }) => {

    useEffect(() => {
        requestPermission();
    }, []);
    const requestPermission = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!permission.granted)
            Alert.alert("You need to enable Camer Permission")
    }

    const handlePresss = async () => {
        if (imageUri === '') pickImage()
        else {
            Alert.alert("Delete", "Are you sure you want to delete this image ? ",
                [{ text: "yes", onPress: () => onChangeImage('') },
                { text: "No" }])
        }
    }

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync()
            if (!result.canceled) onChangeImage(result.assets[0].uri)
        } catch (error) {
            console.log('Error while picking image', error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePresss} >
            <View style={{ flex: 1, marginTop: 5 }} >
                {imageUri === '' ?
                    <AppIcon style={styles.icon} iconColor={colors.greyText} name="camera" size={70} /> :
                    <Image style={styles.icon} src={imageUri} />
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 120, height: 120, alignItems: 'center',
        borderRadius: 20, backgroundColor: colors.veryLightGrey,
        justifyContent: 'center', marginHorizontal: 3
    },
});

export default ImageInput;