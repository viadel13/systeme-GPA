import { AccountTree, Notifications, Person } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { activeMobile } from '../../redux/reducers/rootReducer';

const Navbar = () => {

  const activeMb = useSelector((state) => state.systemeGPA.activeMobile);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const xs = useMediaQuery('(max-width:600px)');


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar  elevation={0} position="sticky" sx={{ backgroundColor: '#f9fbfd', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.1)', top: 0 }}>
        <Toolbar disableGutters={xs ? true : false}>
          <IconButton
           sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }}}
           onClick={()=>dispatch(activeMobile(!activeMb))}
          >
            <MenuIcon sx={{ fontSize: '25px' }} />
          </IconButton>
          <AccountTree sx={{ color: '#2eacb3', fontSize: '35px', mr: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#2eacb3', fontSize: '20px' }} >
            Systeme-GPA
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: 'flex', alignItems: 'center', gap: { xs: 0, sm: 2 } }}>
            <Badge color="error" variant="dot">
              <Notifications sx={{ color: '#555555', fontSize: '25px' }} />
            </Badge>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Person sx={{ color: '#555555', fontSize: '25px' }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}

              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}

            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </ >
  )
}

export default Navbar
