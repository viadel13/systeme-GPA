import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Button, Card, IconButton, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { active } from '../../../redux/reducers/rootReducer';
import { DateField, DatePicker, DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';

const AjoutProjet = () => {
  const activeState = useSelector((state) => state.systemeGPA.active);
  const dispatch = useDispatch();
  const[choix, setChoix] = useState('');

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
      <Card elevation={0} sx={{ border: '1px solid #dee2e6', padding: '12px', mt: 1 }}>
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
          <Stack width='100%' gap={2} display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box component='div' sx={{ width: '100%', flex: { xs: 'initial', sm: 1 } }}>
              <TextField
                fullWidth
                sx={{ backgroundColor: 'white' }}
                name="momProjet"
                placeholder="Nom projet"
              />
            </Box>
            <Box component='div' sx={{ width: '100%', flex: { xs: 'initial', sm: 1 } }}>
              <DesktopDatePicker
                sx={{ width: '100%' }}
                defaultValue={dayjs('2022-04-17')} />
            </Box>
          </Stack>

          <div style={{ width: '100%' }}>
            <Select
              value={choix}
              onChange={(e)=>setChoix(e.target.value)}
              fullWidth
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                Choisir la priorite
              </MenuItem>
              <MenuItem value='Haut'>Haut</MenuItem>
              <MenuItem value='Moyen'>Moyen</MenuItem>
              <MenuItem value='Faible'>Faible</MenuItem>
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
          <Stack direction='row' alignSelf='flex-start' spacing={2}>
            <Button variant='contained' sx={{ textTransform: 'capitalize', }}>créer</Button>
            <Button
              variant='outlined'
              sx={{
                textTransform:
                  'capitalize',
                borderColor: '#555555',
                color: '#555555',
                '&:hover': {
                  backgroundColor: '#555555', color: 'white', borderColor: '#555555'
                }
              }}
            >Annuler
            </Button>
          </Stack>
        </Box>
      </Card>
    </Box>
  )
}

export default AjoutProjet
