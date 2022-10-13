import {createSlice} from '@reduxjs/toolkit';


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        entrance: {
            email: 'free@mail.ru',
            password: '5555',
        },
        checked: JSON.parse(localStorage.getItem('login')) || false,
    },
    reducers: {
        checkIn:(state, action)=> {
            if (state.entrance.email === action.payload.email &
                state.entrance.password === action.payload.password) {
                state.checked = true
                localStorage.setItem('login',JSON.stringify(true))
            }
        },
        logOut:(state, action)=> {
            state.checked = false
            localStorage.removeItem('login')
        }
    }
})

export const {checkIn, logOut} = sidebarSlice.actions
export default sidebarSlice.reducer
