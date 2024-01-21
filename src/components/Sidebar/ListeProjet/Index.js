import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { active } from '../../../redux/reducers/rootReducer';
import { useDispatch, useSelector } from 'react-redux';

const ListeProjet = () => {

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
        <Typography component='span' sx={{ fontSize: '23px' }}>Liste des Projets</Typography>
      </Stack>
    </Box>
  )
}

export default ListeProjet
