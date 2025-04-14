import { FlatList, StyleSheet, View } from "react-native";
import { FunctionComponent, useRef } from "react";
import ImageInput from "./ImageInput";
import colors from "@/config/colors";

interface ImageInputListProps {
    imageUris: Array<string>,
    onAddImage: (uri: string) => void,
    onRemoveImage: (uri: string) => void,
    imageInputLength?: number
}

const ImageInputList: FunctionComponent<ImageInputListProps> = ({ imageUris = [], onAddImage, onRemoveImage, imageInputLength = 50 }) => {
    const listRefrence = useRef<FlatList<string> | null>(null);

    return (
        <View style={{ flexDirection: 'row' }} >
            <FlatList
                data={imageUris.length >= imageInputLength ? imageUris : [...imageUris, '']}
                // data={imageUris}
                ref={listRefrence}
                keyExtractor={imageUri => imageUri}
                renderItem={({ item }) =>
                    <ImageInput
                        imageUri={item}
                        onChangeImage={(uri) => {
                            if (item === '') onAddImage(uri)
                            else onRemoveImage(item)
                            listRefrence.current?.scrollToEnd()
                        }}
                    />}
                horizontal />
        </View>
    );
};

export default ImageInputList;
