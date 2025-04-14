import client from './client';

export interface LoginProps {
    email: string,
    password: string,
}

export interface RegisterProps {
    name: string,
    email: string,
    password: string,
}

export const login = ({ email, password }: LoginProps) => client.post('/auth', {
    "email": email,
    "password": password
});

export const register = ({ name, email, password }: RegisterProps) => client.post('/users', {
    "name": name,
    "email": email,
    "password": password
});

export default {
    login, register
};