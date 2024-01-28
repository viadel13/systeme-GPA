import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   active: false,
   activeMobile: true,
   token: '',
   uid: '',
   datasEdit: [],
   datasDelete: [],

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
      },

      uid: (state, action) => {
         state.uid = action.payload;
      },

      datasEdit: (state, action) => {
         state.datasEdit = action.payload;
      },
      
      datasDelete: (state, action) => {
         state.datasDelete = action.payload;
      },

   }
})

export const { active, activeMobile, token, uid, datasEdit, datasDelete } = systemeGPASlice.actions;


export default systemeGPASlice.reducer;