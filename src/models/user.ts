export function mapperToUserDTO(userDAO: UserDAO):UserDTO {
    return {
        id: userDAO.id,
        name: userDAO.name,
        lastName: userDAO.lastName,
        email: userDAO.email,
        numberPhone: userDAO.phoneNumber
    }
}

export function mapperToUserDAO(userDTO: UserDTO):UserDAO {
    return {
        id: userDTO.id,
        name: userDTO.name,
        lastName: userDTO.lastName,
        email: userDTO.email,
        phoneNumber: userDTO.numberPhone
    }
}

export interface UserDTO {
    id:          number;
    name:        string;
    lastName:    string;
    email:       string;
    numberPhone: string;
}

export interface UserDAO {
    id:          number;
    name:        string;
    lastName:    string;
    email:       string;
    phoneNumber: string;
}
