import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './RegisterPage.scss'

const RegisterPage = () => {
    const [newUser, setNewUser] = useState({
        name: "",
        lastName: "",
        mail: "",
        password: ""
    })


    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>, key: string): void => {
        setNewUser((prevState) => ({
            ...prevState,
            [key]: target.value
        }))
    };
    return (
        <div className='RegisterPage'>
            <div className='RegisterPage__header'>
                <Link className='RegisterPage__header__back' to="/login" replace>Volver</Link>
            </div>
            <h1>RegisterPage</h1>
            <form className='RegisterPage__form'>
                <div className='RegisterPage__form__field'>
                    <label className='RegisterPage__form__label'>Name:</label>
                    <input
                        className='RegisterPage__form__input'
                        required
                        type="text"
                        value={newUser.name}
                        onChange={(e) => handleChange(e, "name")}
                    />
                </div>
                <div className='RegisterPage__form__field'>
                    <label className='RegisterPage__form__label'>LastName:</label>
                    <input
                        className='RegisterPage__form__input'
                        required
                        type="text"
                        value={newUser.lastName}
                        onChange={(e) => handleChange(e, "lastName")}
                    />
                </div>
                <div className='RegisterPage__form__field'>
                    <label className='RegisterPage__form__label'>Mail: </label>
                    <input
                        className='RegisterPage__form__input'
                        required
                        type="email"
                        value={newUser.mail}
                        onChange={(e) => handleChange(e, "mail")}
                    />
                </div>
                <div className='RegisterPage__form__field'>

                    <label className='RegisterPage__form__label'>Password:</label>
                    <input
                        className='RegisterPage__form__input'
                        required
                        type="password"
                        value={newUser.password}
                        onChange={(e) => handleChange(e, "password")}
                    />
                </div>
                <button className='RegisterPage__form__button' type='submit'>Register account</button>
            </form>
        </div>
    )
}

export default RegisterPage;