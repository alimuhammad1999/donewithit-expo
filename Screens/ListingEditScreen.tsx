import { FunctionComponent, useState } from "react";
import { Screen } from "../components/Screen";
import { AppFrorm, AppFrormField, SubmitButton } from "../components/Form";
import { ColorValue, StyleSheet, View } from "react-native";
import * as yup from 'yup';
import UploadScreen from "./UploadScreen";
import listingApi from "../api/listings";
import { FormikHelpers, FormikValues } from "formik";
import AppFormPicker from "../components/Form/AppFormPicker";
import FormImagePicker from "../components/Form/FormImagePicker";
import useLocation from "../hooks/useLocation";
import LottieView from "lottie-react-native";

interface ListingEditScreenProps {
}

let validationSchema = yup.object().shape({
    title: yup.string().required().min(1).max(20).label("Title"),
    price: yup.number().required().positive().min(1).max(10000).label("Price"),
    category: yup.object().required().nonNullable().label("Category"),
    description: yup.string().label("Description"),
    images: yup.array().min(1, 'Please select atleast one Image'),
})

const ListingEditScreen: FunctionComponent<ListingEditScreenProps> = () => {
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [uploadVisible, setUploadVisible] = useState(false);
    const [animationVisible, setAnimationVisible] = useState(false);

    const submitData = async (values: FormikValues, { resetForm }: FormikHelpers<FormikValues>) => {
        setUploadVisible(true);
        setProgress(0);
        const response = await listingApi.uploadData({ ...values, location },
            (progressEvent) => setProgress(progressEvent.loaded / progressEvent.total!));

        if (!response.ok) {
            console.log(response, '\n\n\n\nError: ', response.originalError, response.data, response.problem);
            setUploadVisible(false);
        }
        resetForm()
    };

    return (
        <Screen >
            <UploadScreen progress={progress} visible={uploadVisible} onDone={(isCancelled) => {
                setUploadVisible(false)
                console.log('Animation Done')
            }} />
            <LottieView
                source={require('../assets/animations/done.json')}
                autoPlay={true}
                onAnimationFinish={() => setAnimationVisible(false)} />
            <View style={{ flex: 1 }}>
                <View style={styles.inputContainer} >
                    <AppFrorm
                        initialValues={{ title: '', price: '', category: null, description: '', images: [] }}
                        onSubmit={submitData} validationSchema={validationSchema}>
                        <FormImagePicker
                            name='images' inputLenght={7} />
                        <AppFrormField
                            icon="user" placeholder="Title" 
                            name="title" textContentType='name' />
                        <AppFrormField
                            icon={"dollar"} placeholder="Price"
                            keyboardType="numeric" maxLength={8}
                            name="price" />
                        <AppFormPicker
                            name='category'
                            items={categories}
                            placeholder="Category"
                        />
                        <AppFrormField
                            icon={"align-left"} placeholder="Description"
                            autoCapitalize='sentences' autoCorrect multiline
                            maxLength={255} numberOfLines={3}
                            name="description"  />
                        {/* <AppPicker
                            icon='user'
                            items={categories}
                            onSelectItem={(item) => setCategory(item)}
                            placeholder="Category" selectedItem={category} /> */}
                        <SubmitButton title="Submit" />
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
        marginHorizontal: 10
    }
})

export type Category = {
    backgroundColor: ColorValue,
    icon: any,
    label: string,
    value: number,
}

export const categories: Array<Category> = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];

export default ListingEditScreen;