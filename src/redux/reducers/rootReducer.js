import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    active: false,
    activeMobile: true

}

const systemeGPASlice = createSlice({
    name: 'systemeGPASlice',
    initialState,

    reducers: {

        active: (state, action) => {
           state.active = action.payload;
        },

        activeMobile: (state, action) => {
           state.activeMobile = action.payload;
        }

    }
})

export const { active, activeMobile } =  systemeGPASlice.actions;


export default  systemeGPASlice.reducer;