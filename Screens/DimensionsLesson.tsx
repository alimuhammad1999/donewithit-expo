/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Dimensions,
    Platform,
    SafeAreaView,
    StyleSheet,
    View,
    ScaledSize,
} from 'react-native';

function DimensionsLesson() {
    return (
        <SafeAreaView style={styles.sectionTitle}>
            <View style={{
                backgroundColor: "dodgerblue",
                width: '100%',
                height: isLandscape(Dimensions.get('window')) ? '100%' : '30%'
            }} ></View>
        </SafeAreaView>
    );
}

function isLandscape(dimensions: ScaledSize) {
    return dimensions.height > dimensions.width ? false : true
}
const styles = StyleSheet.create({
    sectionTitle: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === 'ios' ? 100 : 0
    },
});

{/* <Text style={{ color: 'black' }} > Hello </Text>
      <TouchableOpacity onPress={() => ToastAndroid.show("image tapped", ToastAndroid.SHORT)}>
        <Image
          onLoad={() => ToastAndroid.showWithGravity("Loading image", ToastAndroid.SHORT, ToastAndroid.BOTTOM)}
          onLoadEnd={() => ToastAndroid.show("Image Loaded", ToastAndroid.SHORT)}
          // blurRadius={-0.001}
          fadeDuration={3000}
          style={{ width: 200, height: 300, resizeMode: 'contain' }}
          source={{ uri: 'https://picsum.photos/400' }} />
        <Button title="tap me" color={'orange'} onPress={() => Alert.prompt("Title", "Message",
          text => ToastAndroid.show(text, ToastAndroid.SHORT)
        )} />
      </TouchableOpacity> */}

export default DimensionsLesson;
