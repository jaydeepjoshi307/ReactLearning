import { createSlice } from "@reduxjs/toolkit";

// const intialState = {
//   permUrl: null,
// };

const userInputSlice = createSlice({
  name: "userInput",
  initialState: {
    tempUrl:'',
    permUrl: '',
  },
  reducers: {
    getTempUrl: (state,action ) => {
        state.tempUrl = action.payload;
      },  
    getPermUrl: (state ) => {
      state.permUrl = state.tempUrl;
    },    
},

});

export default userInputSlice.reducer;
export const {getTempUrl, getPermUrl } = userInputSlice.actions;
