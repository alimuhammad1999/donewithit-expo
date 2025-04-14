import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '@/navigation/routes';

function WelcomScreen({ }) {
    const navigator = useNavigation();

    return (
        <ImageBackground
            blurRadius={9}
            style={styles.parentContainer}
            source={require('../assets/RMHomeSC.jpg')}
            fadeDuration={1000}>
            <View style={styles.logoholder} >
                <Image style={styles.logo} source={require('../assets/RM_logo.png')} />
                <Text style={styles.tagline} > Greatest Club to Ever Live </Text>
            </View>
            <AppButton title={'Login'} onPress={() => navigator.navigate(routes.LOGIN)} />
            <AppButton color={colors.secondary} title={'SignUp'}
                onPress={() => navigator.navigate(routes.REGISTER)} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: '50%', width: '100%',
        resizeMode: 'contain',
    },
    logoholder: {
        position: 'absolute',
        height: '30%', width: '55%',
        top: 75, alignItems: 'center',
    },
    parentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20
    },
    registerbtn: {
        backgroundColor: 'dodgerblue'
    },
    tagline: {
        color: 'black',
        // backgroundColor: 'white',
        top: 15, padding: 4,
        fontSize: 16,
        borderRadius: 12
    }
})
// substitue of orientation in android
// flexDirection: sets primary axis of the View(horizontal-row) or (vertical-column)--> values:   
//                 row, column, row - reverse, column - reverse  

//substitute of gravity in android
//justifyContent: sets the gravity of the primary axis which is column(by default) --> values: 
//                 center, flex - start, flex - end, space - around, space - between, space, evenly 


// alignItems: sets the gravity of the secondary axis which is row(by default) ->values: 
//                 center, baseline, flex - end, flex - start, strech
// flexWrap:  if application window overflows row/column then it takes items to the next row/column ,
//                   and alignItems property now behaves as an inline property
//  alignContent: this property is used to align the whole content as opposed  to a single line in alignItems
//                   alin content only works if we have wraping
// flexBasis: sets the spcae taken by view on primary axis, width for row, height for column 
// flexGrow : occupies the remaining space on primary axis
// position: raltive -> relative to where all the views are, absolute -> starts from the start of parent,
//                        we use top, bottom, left, right to det margin from parent 

export default WelcomScreen;
