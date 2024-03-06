import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cars:[],
    trigger:null,
    carForUpdate:null
}
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            state.cars = action.payload
        },
        reloadPage:state=>{
            state.trigger = !state.trigger
        },
        setCarForUpdate:(state,action)=>{
            state.carForUpdate = action.payload
        }
    }
})

const {reducer:carReducer, actions} = carSlice;

const carActions = {
    ...actions
}
export {carReducer,carActions}