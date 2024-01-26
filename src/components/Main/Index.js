import { Box, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Index'
import Sidebar from '../Sidebar/Index';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { token } from '../../redux/reducers/rootReducer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { uid } from '../../redux/reducers/rootReducer';

const Main = () => {
  const media = useMediaQuery('(max-width:959px)');
  const activeState = useSelector((state) => state.systemeGPA.active);
  const tokenView = useSelector((state) => state.systemeGPA.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        dispatch(uid(user.uid));
      } else {
        // User is signed out
        // ...
      }
    });
  }, [dispatch])

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(token(storedToken));
    }else{
      navigate('/login');
    }
  }, [dispatch, navigate]);

  const views = tokenView && (
    <Box>
      <Navbar />
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <Sidebar />
        <Box
          sx={{
            width: media ? '100%' : activeState ? '100%' : 'calc(100% - 250px)',
            position: 'relative',
            left: { xs: 0, sm: 0, md: activeState ? '0' : '250px' },
            transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out',
          }}
        >
          <Outlet />
        </Box>

      </Box>
    </Box>
  );

  return <> {views} </>
}

export default Main
