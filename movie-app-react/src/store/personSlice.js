import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
    initialState:{
        info: null
    },
    reducers:{
        loadPerson: (state,action)=>{
            state.info = action.payload;
        },
        removePerson: (state,action)=>{
            state.info  = null;
        }
    }
})

export const {loadPerson,removePerson} = personSlice.actions;
export default personSlice.reducer;