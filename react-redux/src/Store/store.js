import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "../Reducer/userInputSlice";
import userDataSlice from "../Reducer/userDataSlice";

const store = configureStore({
  reducer: {
    userInput: userInputReducer,
    userData: userDataSlice,
  },
});

export default store;
