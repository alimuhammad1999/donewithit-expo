import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppText from './components/AppText.android';
import AppButton from './components/AppButton';

function StylesLesson() {

    console.log("useDimensionsApi")
    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center'
        }} >
            {/* <Text style={{
                // fontFamily: 'poppins',
                fontSize: 30,
                fontStyle: 'italic',
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'lowercase',
                textDecorationLine: 'underline line-through',
                textAlign: 'center', lineHeight: 50
            }} >I Love React Native, This is My First React Native App, And I am Loving It So Far</Text> */}
            {/* <Icon name='email' size={60} color='dodgerblue' /> */}
            <AppButton title={'Login'} onPress={() => console.log('btn')} />
        </View>
    );
}

//Padding and margin used, Shadows used, shadow color, shadowOpacity, shadowRadius etc only for IOS for android
//  elvation is used, Also radius, and Borders

export default StylesLesson;
