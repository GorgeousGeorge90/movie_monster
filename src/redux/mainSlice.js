import {createSlice} from '@reduxjs/toolkit';


const mainSlice = createSlice({
    name: 'main',
    initialState: {
        films: [],
        series:[],
        isFetching: false,
    },
    reducers: {

        getFilms:()=>{},

        addFilms: (state,action)=> {
            state.films = action.payload
        },

        getSeries:()=>{},

        addSeries: (state, action)=> {
            state.series = action.payload
        },

        getIsFetching: (state, action)=> {
            state.isFetching = action.payload
        }

    },
})

export const  { getFilms, getSeries, getIsFetching, addFilms, addSeries} = mainSlice.actions
export default mainSlice.reducer

