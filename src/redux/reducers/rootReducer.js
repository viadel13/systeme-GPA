import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    active: false,
    activeMobile: true,
    token: '',

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
        },

        token: (state, action) => {
           state.token = action.payload;
        }

    }
})

export const { active, activeMobile, token } =  systemeGPASlice.actions;


export default  systemeGPASlice.reducer;