// Actions
import { logoutAction } from '../../redux/slices/authSlice';

// Libraries
import React from 'react'
import { NavLink } from 'react-router-dom';

// Store - Hooks
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';

// Styles
import './ProtectedLayout.scss'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(logoutAction())
    };

    return (
        <div className='ProtectedLayout'>
            <nav className='ProtectedLayout__navBar'>
                <ul className='ProtectedLayout__navBar__menu'>
                    <li className='ProtectedLayout__navBar__item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? " ProtectedLayout__navBar__item--active" : " ProtectedLayout__navBar__item"
                            }
                            to="/home">Home
                        
                        </NavLink>
                    </li>
                    <li className='ProtectedLayout__navBar__item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? " ProtectedLayout__navBar__item--active" : " ProtectedLayout__navBar__item"
                            }
                            to="/about">About</NavLink>
                    </li>
                    <li className='ProtectedLayout__navBar__item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? " ProtectedLayout__navBar__item active" : " ProtectedLayout__navBar__item"
                            }
                            to="/profile">Profile</NavLink>
                    </li>
                    <li className='ProtectedLayout__navBar__item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? " ProtectedLayout__navBar__item active" : " ProtectedLayout__navBar__item"
                            }
                            to="/not-found">NotFound</NavLink>
                    </li>
                </ul>
                <ul className='ProtectedLayout__navBar__menu'>
                    <li className='ProtectedLayout__navBar__item'>
                        {user?.username}
                    </li>
                    <li className='ProtectedLayout__navBar__item'>
                        <button onClick={handleLogOut}>LOG OUT</button>
                    </li>
                </ul>
            </nav>
            <div className='ProtectedLayout__content'>
                {children}
            </div>
        </div>
    )
}

export default ProtectedLayout;