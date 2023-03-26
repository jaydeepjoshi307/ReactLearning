import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from './userInputSlice'

const store = configureStore({
    reducer:{
        userInput: userInputReducer,
    },
})

export default store;
