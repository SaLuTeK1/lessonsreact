import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    characters:[]
};

const getCharacters = createAsyncThunk(
    'characterSlice/getCharacters',
    async (ids,thunkAPI)=>{
            try{
                const {data} = await characterService.getById(ids);
                return data
            }catch (e){
                const error = e.response.data;
                return thunkAPI.rejectWithValue(error)
            }
    }
);

const characterSlice = createSlice({
    name:'characterSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder =>
        builder
            .addCase(getCharacters.fulfilled,(state, action) => {
                state.characters = action.payload
            })
});

const {reducer:characterReducer,action} = characterSlice;

const characterAction = {
    ...action,
    getCharacters
}
export {characterAction,characterReducer}