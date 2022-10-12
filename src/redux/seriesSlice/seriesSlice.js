import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieApi from "../../api/api";


export const addNewSeries = createAsyncThunk(
    'series/addNewSeries',
    async (args,{...dispatch})=> {
        const response = await movieApi.getTV()
        dispatch(addSeries(response.data))
    }
)


const seriesSlice = createSlice({
    name: 'series',
    initialState: {
        series:[],
        isFetching:false,
    },
    reducers: {
        addSeries:(state,action)=>{
            state.series.push(action.payload)
        }
    },
    extraReducers:{}
})

export const {addSeries} = seriesSlice.actions
export default seriesSlice.reducer

