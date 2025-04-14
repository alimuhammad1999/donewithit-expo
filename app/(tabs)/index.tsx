import { StyleSheet } from 'react-native';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import AppNavigation from '../../navigation/AppNavigation';
import AuthContext from '@/auth/context';
import authStorage from '@/auth/storage';
import * as SplashScreen from 'expo-splash-screen';

export type User = { email: string, iat: number, name: string, userId: number } | null;

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  fade: true,
});

export default function HomeScreen() {
  const [user, setUser] = useState<User>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    await SplashScreen.preventAutoHideAsync();
    const userObj = await authStorage.getUser();
    if (userObj) setUser(userObj);
    setIsReady(true);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  useCallback(() => {
    if (isReady) SplashScreen.hideAsync()
  }, [isReady]);

  return (
    <NavigationIndependentTree>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {user ? <AppNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </AuthContext.Provider>
    </NavigationIndependentTree>

  );
}


import { AppRegistry } from 'react-native';
import { expo as appName } from '../../app.json';
import AuthNavigation from '@/navigation/AuthNavigation';
import { useCallback, useEffect, useState } from 'react';

AppRegistry.registerComponent(appName.name, () => HomeScreen);