import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

interface ActivityIndicatorProps {
    visible: boolean;
    autoplay?: boolean;
    loop?: boolean;
    onDone?: () => void;
    view?: any
}

const ActivityIndicator = ({ visible = false,
    view = require("../../assets/animations/loader.json"),
    onDone,
    autoplay = true,
    loop = true }: ActivityIndicatorProps) => {

    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <LottieView autoPlay={autoplay} style={{ width: "100%", height: "100%" }} loop={loop} source={view} onAnimationFinish={onDone} />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    }
});

export default ActivityIndicator;