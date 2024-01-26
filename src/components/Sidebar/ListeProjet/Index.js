import { ArrowBack, ArrowForward, Delete, Edit, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Button, Collapse, IconButton, LinearProgress, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@mui/material'
import { active } from '../../../redux/reducers/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const ListeProjet = () => {

  const activeState = useSelector((state) => state.systemeGPA.active);
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.systemeGPA.uid);
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(true);
  const [openIndex, setOpenIndex] = useState(-1);
  const media = useMediaQuery('(max-width:600px)');


  useEffect(() => {
    fetchProjet(uid);
  }, [uid, datas]);


  async function fetchProjet(param) {
    try {
      const response = await axios.get(`https://api-systemegp.onrender.com/listProjet/${param}`);
      if (response && response.data && response.data.length === 0) {
        setDatas([]);
      } else if (response && response.data) {
        setDatas(response.data);
      }
      setLoad(false); // Peu importe si les données sont vides ou non, définissez load à false après la requête.
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      setLoad(false); // Gérez les erreurs en passant load à false
    }
  }

  const viewTabs = load
    ? <TableRow><TableCell colSpan={6}>Chargement</TableCell></TableRow>
    : datas.length !== 0 ?
      (
        datas.map((i, index) => {
          const dateFromFirestore = new Date(i.date);
          const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
          const daysOfWeek = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

          // Récupérer les parties de la date
          const day = dateFromFirestore.getDate(); // Jour du mois (1-31)
          const monthIndex = dateFromFirestore.getMonth(); // Mois (0-11)
          const year = dateFromFirestore.getFullYear(); // Année (ex: 2022)

          return (
            <Fragment key={index}>
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell >
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    {openIndex === index ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {i.projet}
                </TableCell>
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>{`${day} ${months[monthIndex]} ${year}`}</TableCell>
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>
                  <LinearProgress variant="determinate" value={50} />
                  completed 50%
                </TableCell >
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>{i.priorite}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <Stack spacing={2} sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
                        <Typography variant="h6" gutterBottom fontSize='15px'>
                          Date: <span style={{ fontWeight: 400 }}>{`${day} ${months[monthIndex]} ${year}`}</span>
                        </Typography>
                        <Typography variant="h6" gutterBottom fontSize='15px'>
                          Progres:
                        </Typography>
                        <LinearProgress sx={{ width: '20%' }} variant="determinate" value={50} />
                        <span style={{ fontWeight: 400 }}>completed 50%</span>
                        <Typography variant="h6" gutterBottom fontSize='15px'>
                          Priorite: <span style={{ fontWeight: 400 }}>{i.priorite}</span>
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
            </Fragment>
          )
        })
      )
      : <TableRow><TableCell colSpan={6}>Aucune donnees</TableCell></TableRow>

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
      <TableContainer component={Paper} elevation={0} sx={{ mt: 1 }}>
        <Table aria-label="collapsible table">
          <TableHead sx={{ backgroundColor: '#eeeeee' }}>
            <TableRow>
              <TableCell sx={{ width: '8%', display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }} />
              <TableCell colSpan={media ? '4' : '0'} sx={{ width: { xs: '0%', sm: '20%' } }} >Projet</TableCell>
              <TableCell style={{ width: '20%' }} sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }} >Date</TableCell>
              <TableCell style={{ width: '20%' }} sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }} >Progres</TableCell>
              <TableCell style={{ width: '15%' }} sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }} >Priorite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {viewTabs}
          </TableBody>

        </Table>
      </TableContainer>

    </Box>
  )
}

export default ListeProjet
