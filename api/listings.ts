import { Listing } from "@/Screens/ListingScreen";
import { AxiosProgressEvent, AxiosResponse } from 'axios';
import { FormikValues } from "formik";
import apiClient from "./client";
import authStorage from "../auth/storage";

const endPoint = '/listings';

// const getListings = () => apiClient.get(endPoint);
const getListings = async () => {
    const response = await apiClient.get(endPoint);
    return response as unknown as AxiosResponse<Listing[], any>;
};

const getMyListings = async () => {
    const token = await authStorage.getToken();
    const response = await apiClient.get('/my' + endPoint, { headers: { 'x-auth-token': token } });
    return response as unknown as AxiosResponse<Listing[], any>;
}

const uploadData = async (listing: FormikValues, uploadProgress: (progressEvent: AxiosProgressEvent) => void) => {
    console.log('Listing: ', listing.images);

    const formData = new FormData();
    formData.append('title', listing.title);
    formData.append('price', listing.price);
    formData.append('categoryId', listing.category.value);
    formData.append('description', listing.description);
    listing.images.forEach((image: string, index: number) =>
        formData.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image,
        } as any))
    if (listing.location) formData.append('location', JSON.stringify(listing.location));

    return apiClient.post(endPoint, formData, { onUploadProgress: uploadProgress, headers: { 'Content-Type': 'multipart/form-data' } });
};

export default {
    getListings,
    uploadData,
    getMyListings
};