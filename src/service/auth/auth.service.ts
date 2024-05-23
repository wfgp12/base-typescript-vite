import { LoginResponse, RegisterForm, RegisterResponse, validateTokenResponse } from "../../models/auth"
import { mapperToUserDTO } from "../../models/user";
import { LocalStorageKeys } from "../../utils/local-storage-keys";
import http from "../http.service";

export const loginService = async (email: string, password: string) => {
    try {
        const { status, data, error } = await http.post<LoginResponse>('api/user/login', { email, password });
        if (status === 'error' || !data) throw new Error(error?.message as string);

        const {user, token} = data;
        const userModel = mapperToUserDTO(user);

        localStorage.setItem(LocalStorageKeys.token, token);

        return {
            user: userModel,
            token
        }
    } catch (error) {
        console.error(error);
    }
}

export const registerService = async (newUser: RegisterForm) => {
    try {
        const { status, data, error } = await http.post<RegisterResponse>('api/user', {...newUser});
        console.log(status, data, error);
        if (status === 'error' || !data) throw new Error(error?.message as string);

        return true;
    } catch (error) {
        console.error(error);
    }
}

export const validateTokenSession = async () => {
    try {
        const { status, data, error } = await http.post<validateTokenResponse>('api/user/validate-token');
        if (status === 'error' || !data) throw new Error(error?.message as string);

        const {user} = data;
        const userModel = mapperToUserDTO(user);

        return userModel;
        
    } catch (error) {
        console.error(error);
    }
}