import { LoginResponse } from "../../models/auth"
import http from "../http.service";

export const loginService = async (email: string, password: string): Promise<LoginResponse | undefined> => {
    try {
        const response = await http.post<LoginResponse>('api/users/login', { email, password });
        if (!response) return
        const { token, user } = response;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        return {
            user,
            token
        }
    } catch (error) {
        console.error(error);
    }

}