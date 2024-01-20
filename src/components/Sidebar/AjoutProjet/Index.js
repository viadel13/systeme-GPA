import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Card, IconButton, Stack, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { active } from '../../../redux/reducers/rootReducer';
import { DateField, DatePicker, DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const AjoutProjet = () => {
  const activeState = useSelector((state) => state.systemeGPA.active);
  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: { xs: '0 8px', sm: '0 30px', md: '0 25px' } }}>
      <Stack
        direction='row'
        alignItems='center'

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
        <Typography component='span' sx={{ fontSize: '23px' }}>Ajouter un Projet</Typography>
      </Stack>
      <Card sx={{ border: '1px solid #dee2e6', padding: '12px' }}>
        <div style={{ width: '100%' }}>
          <TextField
            fullWidth
            sx={{ backgroundColor: 'white' }}
            name="momProjet"
            placeholder="Nom projet"
            size='small'
          />
        </div>
        <div style={{ width: '100%' }}>
          <DesktopDatePicker
            sx={{  width: '100%' }}
            defaultValue={dayjs('2022-04-17')} />
        </div>
        <div style={{ width: '100%' }}>
          <DesktopDatePicker
            sx={{  width: '100%' }}
            defaultValue='dsd' />
        </div>
      </Card>
    </Box>
  )
}

export default AjoutProjet
