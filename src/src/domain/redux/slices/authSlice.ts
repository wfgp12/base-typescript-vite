import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from '../../models/user';

interface AppSliceState {
    user: User | null
    isAuth: boolean
    token?: string
}
const initialState: AppSliceState = {
    user: null,
    isAuth : false,
    token: ''
}

export const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<AppSliceState>) => {
            state.isAuth = action.payload.isAuth;
            state.user = action.payload.user
        },
        logoutAction : (state) => {
            state.isAuth = false
        }
    }
})

export const { loginAction, logoutAction } = authenticationSlice.actions;
export default authenticationSlice.reducer;