import colors from "@/config/colors";
import LottieView from "lottie-react-native";
import { Modal, View, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';

interface UploadScreenProps {
    progress: number;
    visible: boolean;
    onDone: (isCancelled: boolean) => void;
}

const UploadScreen = ({ progress = 0, visible = false, onDone }: UploadScreenProps) => {
    const handleAnimationFinish = (isCancelled: boolean) => {
        console.log('Animation completed!')
        onDone!(true)
    };
    return (
        <Modal visible={visible}>
            <View style={styles.Modal}>
                {progress < 1 ? <Progress.Bar progress={progress} width={200} color="white" />
                    : <LottieView
                        style={{ height: '100%', width: '100%' }}
                        autoPlay
                        source={require('../assets/animations/done.json')}
                        loop={false}
                        onAnimationFinish={(isCanceled) => {
                            onDone(isCanceled)
                            console.log('done')
                        }} />}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    Modal: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default UploadScreen;