import { FunctionComponent } from "react";
import AppPicker, { AppPickerProps, items } from "../AppPicker";
import FormErrorMessage from "./FormErrorMessage";
import { FormikErrors, FormikTouched, FormikValues, useFormikContext } from "formik";

interface AppFormPickerProps extends Omit<AppPickerProps, 'onSelectItem'> {
    name: string,
    onSelectItem?: (a?: items) => void,
    PickerItemComponent?: any,
}

const AppFormPicker: FunctionComponent<AppFormPickerProps> = ({ name, onSelectItem, PickerItemComponent, ...otherProps }) => {
    const { setFieldValue, errors, touched, values } = useFormikContext<FormikValues>();
    const errorMessage = errors[name as keyof FormikErrors<FormikValues>] as string;
    const isTouched = touched[name as keyof FormikTouched<FormikValues>] as boolean;
    return (
        <>
            <AppPicker
                {...otherProps}
                icon="select-group"
                PickerItemComponent={PickerItemComponent}
                onSelectItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
            />
            <FormErrorMessage message={errorMessage} visible={isTouched} />
        </>
    );
}

export default AppFormPicker;