import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { active } from '../../redux/reducers/rootReducer';


const Dashboard = () => {

  const dispatch = useDispatch();

  const activeState = useSelector((state) => state.systemeGPA.active);

  return (
    <Box>
      <Stack
        direction='row'
        alignItems='center'
        sx={{ padding: { xs: '0 8px', sm: '0 30px', md: '0 25px' } }}
      >
        {
          !activeState
            ? <IconButton
              onClick={() => dispatch(active(!activeState))}
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            >
              <ArrowBack sx={{ color: '#0d6efd' }} />
            </IconButton>
            : <IconButton
              onClick={() => dispatch(active(!activeState))}
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            >
              <ArrowForward sx={{ color: '#0d6efd' }} />
            </IconButton>
        }
        <Typography component='span' sx={{ fontSize: '23px' }}>Dashboard</Typography>
      </Stack>

    </Box>
  )
}

export default Dashboard;
