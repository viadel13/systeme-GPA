import { AccountTree } from '@mui/icons-material';
import { Box, Button, FormHelperText, Paper, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import axios from 'axios';
import { useFormik } from "formik";
import { useState } from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import { token } from '../../redux/reducers/rootReducer';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {

      try {
        const response = await signInWithEmailAndPassword(auth, values.email, values.password);

        if (response) {
          const response = await axios.post('http://127.0.0.1:5000/auth', values);
          console.log(response.data.customToken);
          dispatch(token(response.data.customToken));

          // Stockez le token dans localStorage
          localStorage.setItem('token', response.data.customToken);
          
          navigate('/');
        }

      } catch (error) {
        console.log('error')
      }
    },

    validate: (values) => {
      const errors = {}
      if (!values.email) {
        errors.email = 'Champ requis !';
      }
      if (!values.password) {
        errors.password = 'Champ requis !';
      }

      return errors;
    }


  })


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', width: '100%', p: '15px 12px', position: 'relative' }}>
      <Paper elevation={1} sx={{ borderColor: '#f0f0f0', p: '45px 35px', width: { xs: '350px', sm: '60%', md: '500px' } }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Typography variant='h6' mb={5}>Login to your account</Typography>
          <Box component='div' sx={{ mb: 1 }}>
            <TextField
              fullWidth
              type='email'
              sx={{ backgroundColor: 'white' }}
              name="email"
              placeholder="Email address"
              error={formik.touched.email && formik.errors.email ? true : false}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && <FormHelperText sx={{ color: 'red' }}>{formik.errors.email}</FormHelperText>}
          </Box>

          <Box component='div' >
            <TextField
              fullWidth
              type='password'
              sx={{ backgroundColor: 'white' }}
              name="password"
              placeholder="Password"
              autoComplete='false'
              error={formik.touched.password && formik.errors.password ? true : false}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && <FormHelperText sx={{ color: 'red' }}>{formik.errors.password}</FormHelperText>}
          </Box>
          <Button type='submit' variant='contained' sx={{ backgroundColor: '#2eacb3', mt: 2 }} disableElevation fullWidth>Login</Button>
        </Box>
      </Paper>

    </Box>
  )
}

export default Login;
