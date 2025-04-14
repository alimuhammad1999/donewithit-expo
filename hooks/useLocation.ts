import { useEffect, useState } from "react";
import * as Location from 'expo-location';

interface LocationCoords {
    latitude: number;
    longitude: number;
}

export default function useLocation() {
    const [location, setLocation] = useState<LocationCoords>({ latitude: 0, longitude: 0 });

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (granted) {
                const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
                setLocation({ latitude, longitude });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location;
}
