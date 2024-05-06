// Actions
import { loginAction } from '../../redux/slices/authSlice';

// Libraries
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Models
import { User } from '../../models/auth';

// Store - hooks
import { useAppDispatch } from '../../redux/store/hooks';

// Styles
import './LoginPage.scss'
import { loginService } from '../../service/auth/auth.service';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  type userLogin = Pick<User, 'email'|'password'>
  const [state, setState] = useState<userLogin>({
    email: "",
    password: ""
  })

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await loginService(state.email, state.password);
    if(!response) return

    const {user, token} = response;
    dispatch(loginAction({
      user,
      token,
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
          <label className='LoginPage__form__label'>email :</label>
          <input
            type='email'
            className='LoginPage__form__input'
            value={state.email}
            onChange={(e) => handleChange(e, 'email')}
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