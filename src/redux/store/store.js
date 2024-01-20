import {configureStore} from '@reduxjs/toolkit';
import  systemeGPASliceReducer from '../reducers/rootReducer';


const store = configureStore({
    reducer:{
        systemeGPA:  systemeGPASliceReducer,
    }
    
});
  
export default store;