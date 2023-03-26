import { createSlice } from "@reduxjs/toolkit";

// const intialState = {
//   permUrl: null,
// };

const userInputSlice = createSlice({
  name: "userInput",
  initialState: {
    permUrl: ''
  },
  reducers: {
    getPermUrl: (state,action ) => {
      state.permUrl = action.payload;
    },    
},

});

export default userInputSlice.reducer;
export const { getPermUrl } = userInputSlice.actions;
