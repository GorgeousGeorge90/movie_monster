import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieApi from "../../api/api";

export const addMovie = createAsyncThunk(
    'main/addMovie',
    async (args,{dispatch})=> {
        const response = await movieApi.getMovie()
        dispatch(addFilms(response.data.results))
    }
)

export const addFreshNews = createAsyncThunk(
    'main/addFreshNews',
    async (args,{dispatch})=> {
        const response = await movieApi.getNews()
        dispatch(addNews(response.data.results))
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
        news:[],
        isFetching: false,
    },
    reducers: {

        addFilms: (state,action)=> {
            state.films = action.payload
        },

        addSeries: (state, action)=> {
            state.series = action.payload
        },

        addNews: (state, action)=> {
            state.news = action.payload
        }

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
        [addFreshNews.pending]:(state,action)=> {
            state.isFetching = true
        },
        [addFreshNews.fulfilled]:(state,action)=> {
            state.isFetching = false
        },

    }
})

export const  {addFilms, addSeries, addNews} = mainSlice.actions
export default mainSlice.reducer

