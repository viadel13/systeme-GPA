import { ArrowBack, ArrowForward, Delete, Edit, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Button, Collapse, IconButton, LinearProgress, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@mui/material'
import { active } from '../../../redux/reducers/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const ListeProjet = () => {

  const activeState = useSelector((state) => state.systemeGPA.active);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const media = useMediaQuery('(max-width:600px)');

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
      <TableContainer component={Paper} elevation={0} sx={{mt: 1}}>
        <Table aria-label="collapsible table">
          <TableHead sx={{backgroundColor: '#eeeeee'}}>
            <TableRow>
              <TableCell sx={{width: '8%', display: { xs: 'none', sm: 'table-cell', md: 'table-cell' }}} />
              <TableCell colSpan={media && 4} sx={{ width: {xs: '0%', sm: '20%'} }} >Projet</TableCell>
              <TableCell style={{ width: '20%' }} sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }} >Date</TableCell>
              <TableCell style={{ width: '20%' }} sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }} >Progres</TableCell>
              <TableCell style={{ width: '15%' }} sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }} >Priorite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                Gestion de projet
              </TableCell>
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>12 juin 2022</TableCell>
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>
                <LinearProgress variant="determinate" value={50} />
                completed 50%
              </TableCell >
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>Moyen</TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Stack spacing={2} sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
                      <Typography variant="h6" gutterBottom fontSize='15px'>
                        Date: <span style={{ fontWeight: 400 }}>12 juin 2022</span>
                      </Typography>
                      <Typography variant="h6" gutterBottom fontSize='15px'>
                        Progres:
                      </Typography>
                      <LinearProgress sx={{ width: '20%' }} variant="determinate" value={50} />
                      <span style={{ fontWeight: 400 }}>completed 50%</span>
                      <Typography variant="h6" gutterBottom fontSize='15px'>
                        Priorite: <span style={{ fontWeight: 400 }}>Moyen</span>
                      </Typography>
                    </Stack>

                    <Stack mt={2} spacing={2} direction='row' display='flex' alignItems='center' component="div" >
                      <Typography variant="h6" gutterBottom fontSize='18px'>
                        Action :
                      </Typography>
                      <Button
                        size='small'
                        variant='outlined'
                        sx={{ color: 'red', borderColor: 'red', '&:hover': { borderColor: 'red' } }}
                      >
                        <Delete sx={{ fontSize: '18px' }} />
                      </Button>
                      <Button size='small' variant='outlined' sx={{ '&:hover': { borderColor: '#2eacb3' } }}>
                        <Edit sx={{ color: '#2eacb3', borderColor: '#2eacb3', fontSize: '18px' }} />
                      </Button>
                    </Stack>


                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </TableBody>

        </Table>
      </TableContainer>

    </Box>
  )
}

export default ListeProjet
