import { FunctionComponent, useState } from "react";
import ImageInput from "../ImageInput";
import ImageInputList from "../ImageInputList";
import FormErrorMessage from "./FormErrorMessage";
import { FormikValues, useFormikContext } from "formik";

interface FormImagePickerProps {
    name: string,
    imageUris?: Array<string>,
    inputLenght?: number,
}

const FormImagePicker: FunctionComponent<FormImagePickerProps> =
    ({ name, inputLenght = 5 }) => {

        const { setFieldValue, errors, touched, values } = useFormikContext<FormikValues>();

        const imageUris = values[name]

        const addImage = (uri: string) => {
            setFieldValue(name, [...imageUris, uri]);
        }
        const removeImage = (uri: string) => {
            setFieldValue(name, imageUris.filter((imageUri: string) => imageUri !== uri))
        }
        return (
            <>
                <ImageInputList
                    imageInputLength={inputLenght}
                    imageUris={imageUris}
                    // imageUris={imageUris.length >= inputLenght ? imageUris : [...imageUris, '']}
                    onAddImage={addImage}
                    onRemoveImage={removeImage}
                />
                <FormErrorMessage message={errors[name]} visible={!!touched[name]} />
            </>
        );
    };

export default FormImagePicker;
