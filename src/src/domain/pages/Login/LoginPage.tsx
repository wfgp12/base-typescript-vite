// Actions
import { loginAction } from '../../redux/slices/authSlice';

// Libraries
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Models
import { User } from '../../models/user';

// Store - hooks
import { useAppDispatch } from '../../redux/store/hooks';

// Styles
import './LoginPage.scss'

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState<User>({
    username: "",
    password: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAction({
      user: state,
      isAuth: true
    }))
    return
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setState((prevState) => ({ 
      ...prevState, 
      [key]: target.value 
    }))
    return
  };

  return (
    <div className='LoginPage'>
      <div>
        <h1>LOGIN PAGE</h1>
      </div>
      <form id='loginForm' className='LoginPage__form' onSubmit={handleSubmit}>
        <div className='LoginPage__form__field'>
          <label className='LoginPage__form__label'>username :</label>
          <input
            type='email'
            className='LoginPage__form__input'
            value={state.username}
            onChange={(e) => handleChange(e, 'username')}
            required
          />
        </div>
        <div className='LoginPage__form__field'>
          <label className='LoginPage__form__label'>password: </label>
          <input
            type='password'
            className='LoginPage__form__input'
            value={state.password}
            onChange={(e) => handleChange(e, 'password')}
            required
          />
        </div>
        <button className='LoginPage__form__button' type='submit'>Log in</button>
      </form>
        <p>you do not have an account</p>
        <Link to="/register" >Create Account</Link>
    </div>

  )
};

export default LoginPage;