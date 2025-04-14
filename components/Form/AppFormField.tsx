import { FunctionComponent } from "react";
import AppTextInput, { AppTextInputProp } from "../../Screens/AppTextInput";
import FormErrorMessage from "./FormErrorMessage";
import { FormikContextType, FormikValues, useFormikContext, FormikErrors, FormikTouched } from "formik";

interface AppFormFieldProps extends AppTextInputProp {
    name: string,
}

const AppFormField: FunctionComponent<AppFormFieldProps> = ({ name, ...otherProps }) => {
    const { setFieldTouched, errors, touched, values, setFieldValue } = useFormikContext<FormikValues>();
    const errorMessage = errors[name as keyof FormikErrors<FormikValues>] as string;
    const isTouched = touched[name as keyof FormikTouched<FormikValues>] as boolean;
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                placeholderTextColor={'#D4D4D4'}
                {...otherProps}
            />
            <FormErrorMessage message={errorMessage} visible={isTouched} />
        </>
    );
}

export default AppFormField;