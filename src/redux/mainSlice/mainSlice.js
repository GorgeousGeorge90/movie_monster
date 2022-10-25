import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {movieApi} from '../../api/api';

export const addMovie = createAsyncThunk(
    'main/addMovie',
    async (args,{dispatch})=> {
        const response = await movieApi.getMovie()
        dispatch(addFilms(response.data.results))
    }
)

export const addNewSeries = createAsyncThunk(
    'main/addNewSeries',
    async (args,{dispatch})=> {
        const response = await movieApi.getTV()
        dispatch(addSeries(response.data.results))
    }
)

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        films: [],
        series:[],
        isFetching: false,
    },
    reducers: {

        addFilms: (state,action)=> {
            state.films = action.payload
        },

        addSeries: (state, action)=> {
            state.series = action.payload
        },

    },

    extraReducers:{
        [addMovie.pending]:(state,action)=> {
            state.isFetching = true
        },
        [addMovie.fulfilled]:(state,action)=> {
            state.isFetching = false
        },
        [addNewSeries.pending]:(state,action)=> {
            state.isFetching = true
        },
        [addNewSeries.fulfilled]:(state,action)=> {
            state.isFetching = false
        },
    }
})

export const  {addFilms, addSeries} = mainSlice.actions
export default mainSlice.reducer

