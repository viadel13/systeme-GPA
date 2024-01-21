import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Button, Card, IconButton, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
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
        mt={1}

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
      <Card sx={{ border: '1px solid #dee2e6', padding: '12px', mt: 1 }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display='flex'
          flexDirection='column'
          alignItems='center'
          gap={2}
          justifyContent='center'
        >
          <div style={{ width: '100%' }}>
            <TextField
              fullWidth
              sx={{ backgroundColor: 'white' }}
              name="momProjet"
              placeholder="Nom projet"
            />
          </div>
          <div style={{ width: '100%' }}>
            <DesktopDatePicker
              sx={{ width: '100%' }}
              defaultValue={dayjs('2022-04-17')} />
          </div>

          <div style={{ width: '100%' }}>
            <Select
              // value={age}
              // onChange={handleChange}
              fullWidth
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              value=""
            >
              <MenuItem value="">
                <em>Choisir la priorite</em>
              </MenuItem>
              <MenuItem value={10}>Haut</MenuItem>
              <MenuItem value={20}>Moyen</MenuItem>
              <MenuItem value={30}>Faible</MenuItem>
            </Select>
          </div>

          <div style={{ width: '100%' }}>
            <TextField
              fullWidth
              rows={5}
              multiline
              placeholder='Description'
            />
          </div>
          <Button variant='contained' sx={{textTransform: 'capitalize', p: '10px 25px'}}>créer</Button>
        </Box>
      </Card>
    </Box>
  )
}

export default AjoutProjet
