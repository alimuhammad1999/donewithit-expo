import colors from "@/config/colors";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";

interface OfflineNoticeProps {

}

const OfflineNotice = (props: OfflineNoticeProps) => {
    const [connected, setConnected] = useState(true);
    const netInfo = useNetInfo();

    useEffect(() => {
        if (netInfo.type !== "unknown" && netInfo.isInternetReachable !== null) {
            setConnected(netInfo.isInternetReachable);
        }
    }, [netInfo.isInternetReachable]);

    // useEffect(() => {
    //     setConnected(netInfo.isConnected!);
    // }, [connected]);
    return (
        <>
            {!connected &&
                <View style={{
                    backgroundColor: colors.danger, paddingVertical: 20
                }} >
                    <Text style={{ color: colors.white, fontSize: 20, textAlign: 'center' }}>
                        No Internet Connection
                    </Text>
                </View>}
        </>
    );
};

export default OfflineNotice;