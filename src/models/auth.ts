export interface LoginResponse {
    user:  User;
    token: string;
}

export interface User {
    _id:            string;
    fullName:       string;
    email:          string;
    password:       string;
    documentNumber: string;
    dateOfBirth:    Date;
    country:        string;
    roles?:          Roles;
    __v:            number;
}

export interface Roles {
    _id:          string;
    name:         string;
    permissions?: string[];
    __v:          number;
}
