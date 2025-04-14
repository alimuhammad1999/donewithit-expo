import { User } from '@/app/(tabs)';
import React from 'react';


export interface AuthContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export default AuthContext;