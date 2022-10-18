import { createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user')

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: user ? JSON.parse(user).token : '',
        nick: user ? JSON.parse(user).nick : ''
    },
    reducers: {
        login(state, action) {
            state.token = action.payload.token
            state.nick = action.payload.nick
            localStorage.setItem('user', JSON.stringify(action.payload))
        }
    }
})

export const { login } = userSlice.actions