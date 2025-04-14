import { Formik, FormikHelpers, FormikValues } from "formik";
import { FunctionComponent } from "react";
import * as yup from 'yup';

interface AppFormProps {
    initialValues: FormikValues,
    onSubmit: (v: FormikValues, helper: FormikHelpers<FormikValues>) => void,
    validationSchema: yup.AnyObject,
    children: JSX.Element[] | JSX.Element
}

const AppForm: FunctionComponent<AppFormProps> = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >{
                () => (<>{children}</>)
            }
        </Formik>
    );
}

export default AppForm;