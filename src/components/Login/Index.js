import { AccountTree } from '@mui/icons-material';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react'

const Login = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', width: '100%', p: '15px 12px', position: 'relative' }}>
  
      
      <Paper elevation={1} sx={{ borderColor: '#f0f0f0', p: '45px 35px', width: { xs: '350px', sm: '60%', md: '500px' } }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"

        >
          <Typography variant='h6' mb={5}>Login to your account</Typography>
          <Box component='div' sx={{ mb: 1 }}>
            <TextField
              fullWidth
              type='email'
              sx={{ backgroundColor: 'white' }}
              name="email"
              placeholder="Email address"
            />
          </Box>

          <Box component='div' >
            <TextField
              fullWidth
              type='password'
              sx={{ backgroundColor: 'white' }}
              name="pass"
              placeholder="Password"
            />
          </Box>
          <Button variant='contained' sx={{ backgroundColor: '#2eacb3', mt: 2 }} disableElevation fullWidth>Login</Button>
        </Box>
      </Paper>

    </Box>
  )
}

export default Login;
