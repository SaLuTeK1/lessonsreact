import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {episodeService} from "../../services";

const initialState = {
    trigger:null,
    prevPage:null,
    nextPage:null,
    results:[],
    chosenEpisode:null,
};

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async (page,thunkAPI)=>{
        try{
            const {data} = await episodeService.getAll(page);
            return data
        }catch (e){
            const error = e.response.data;
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const episodeSlice = createSlice({
    name:'episodeSlice',
    initialState,
    reducers:{
        chosenEpisode:(state ,action)=>{
            state.chosenEpisode = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                const {info:{prev,next},results} = action.payload;
                state.prevPage = prev
                state.nextPage = next
                state.results = results
            })
            .addMatcher(isFulfilled(getAll),state => {
                state.trigger = !state.trigger
            })
});

const {reducer:episodeReducer, actions} = episodeSlice;

const episodeActions = {
    ...actions,
    getAll
}

export {episodeActions,episodeReducer}