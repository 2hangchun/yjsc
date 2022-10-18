import { configureStore } from '@reduxjs/toolkit';
import { citySlice } from './citySlice'
import { userSlice } from './userSlice'

export const store = configureStore({
    reducer: {
        city: citySlice.reducer,
        user: userSlice.reducer,
    }
})