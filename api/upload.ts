import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';

interface UploadFormProps {
    title: string;
    price: number;
    category: string;
    description: string;
    uris: Array<string>;
}

const UploadForm = ({ title, price, category, description, uris }: UploadFormProps) => {

    const uploadData = async () => {

        let formData = new FormData();
        formData.append('name', title);
        formData.append('price', price.toString());
        formData.append('category', category);
        formData.append('description', description);
        uris.forEach((uri, index) => {
            const file: any = {
                uri: uri,
                name: `image${index}.jpg`, // You can customize the name if needed
                type: 'image/jpeg', // Adjust the MIME type according to your file type
            };
            formData.append('files', file);
        });
        console.log(formData);  
    };
};

export default UploadForm;
