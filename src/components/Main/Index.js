import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../Navbar/Index'
import Sidebar from '../Sidebar/Index'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Main = () => {
  const media = useMediaQuery('(max-width:768px)');
  const activeState = useSelector((state) => state.systemeGPA.active);

  return (
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
  )
}

export default Main
