import { FunctionComponent } from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

interface SubmitButtonProps { title: string }

const SubmitButton: FunctionComponent<SubmitButtonProps> = ({ title }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton title={title} onPress={handleSubmit} />
    );
}

export default SubmitButton;