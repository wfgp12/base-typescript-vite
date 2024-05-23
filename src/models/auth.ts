import { UserDAO } from "./user";

export interface LoginResponse {
    user:  UserDAO;
    token: string;
}

export interface LoginForm {
    email: string,
    password: string
}

export interface validateTokenResponse {
    user: UserDAO
}

export interface RegisterForm extends Omit<UserDAO, 'id'> {
    password: string
    confirmPassword: string
}

export interface RegisterResponse {
    id:          number;
    name:        string;
    lastName:    string;
    email:       string;
    phoneNumber: string;
    password:    string;
    updatedAt:   Date;
    createdAt:   Date;
}
