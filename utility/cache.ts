import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = 'cache';
const expiryInMinutes = 60;

const storeData = async (key: string = 'listings', value: any) => {
    const data = {
        value,
        timestamp: Date.now()
    }
    try {
        await AsyncStorage.setItem(prefix + key, JSON.stringify(data))
    } catch (e) {
        console.log(e);
    }
};

const getData = async (key: string) => {
    try {
        const response = await AsyncStorage.getItem(prefix + key);

        if (response === null) return null;
        const data = JSON.parse(response!);
        if (moment(Date.now()).diff(moment(data.timestamp), 'minutes') > expiryInMinutes) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
        return data.value!;
    } catch (e) {
        console.log(e);
    }
};

export default {
    storeData,
    getData
}