import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";

// Note: Importance of createAsyncThunk : panding, fullfilled and rejected actions



export const fetchUsers = createAsyncThunk("userData/fetchUsers", () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    // const url = useSelector((state) => state.userInput.permUrl); 
// // console.log("URL FROM USER DATA SLICE: ", url);
 return axios.get(url).then((response) => response.data);
});

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
}
);


export default userDataSlice.reducer;
