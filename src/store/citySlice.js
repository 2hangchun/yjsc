import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        city: '北京'
    },
    reducers: {
        changeCity(state, action) {
            state.city = action.payload
        }
    }
})

export const { changeCity } = citySlice.actions