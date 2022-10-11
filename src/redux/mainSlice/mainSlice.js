import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieApi from "../../api/api";

export const addMovie = createAsyncThunk(
    'main/addMovie',
    async (args,{dispatch})=> {
        const response = await movieApi.getMovie()
        dispatch(addFilms(response.data.results))
    }

)

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        films: [],
        series:[],
        news:[],
        isFetching: false,
    },
    reducers: {

        addFilms: (state,action)=> {
            state.films = action.payload
        },

        addSeries: (state, action)=> {
            state.series.push(action.payload)
        },

        addNews: (state, action)=> {
            state.news.push(action.payload)
        }

    },

    extraReducers:{
        [addMovie.pending]:(state,action)=> {
            state.isFetching = true
        },
        [addMovie.fulfilled]:(state,action)=> {
            state.isFetching = false
        }
    }
})

export const  {addFilms, addSeries, addNews} = mainSlice.actions
export default mainSlice.reducer

