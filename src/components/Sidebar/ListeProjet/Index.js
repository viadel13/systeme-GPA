import { ArrowBack, ArrowForward, Delete, Edit, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Button, Collapse, IconButton, LinearProgress, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@mui/material'
import { active, datasDelete, datasEdit } from '../../../redux/reducers/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import React, { Fragment, useEffect, useState } from 'react';
import ModalEdit from './ModalEdit';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import ModalDelete from './ModalDelete';

const ListeProjet = () => {


  const activeState = useSelector((state) => state.systemeGPA.active);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(-1);
  const media = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [donneesEnvoi, setDonneesEnvoi] = useState([]);
  const uid = useSelector((state) => state.systemeGPA.uid);

  const q = query(collection(db, "projets"), where('uid', '==', uid));
  console.log(uid)
  // useEffect(() => {
  //   console.log('monte')
  //   const fetchProjets = async () => {
  //     try {
  //       const q = query(collection(db, "projets"), where('uid', '==', 'uFh9mVHCfeKSeDxDXuohrPxosKIg2id'));
  //       const querySnapshot = await getDocs(q);
        
  //       const projetsData = [];
     
  //       querySnapshot.forEach(doc => {
  //         projetsData.push(doc.data());
  //         console.log(doc.id, " => ", doc.data());

  //       });
        
  //       setDonneesEnvoi(projetsData);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des projets:', error);
  //     }
  //   };
  
  //   fetchProjets(); // Appel de la fonction pour récupérer les projets au chargement initial
  
  //   // Vous pouvez également ajouter un écouteur pour les modifications en temps réel ici si nécessaire
  
  //   return () => {
 
  //   };
  // }, [uid]);

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapchot) => {
      const datas = [];
      querySnapchot.forEach((doc) => {
        datas.push(doc.data());
      });

      if (JSON.stringify(datas) !== JSON.stringify(donneesEnvoi)) {
        setDonneesEnvoi(datas);
      }

      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, [q, donneesEnvoi]);

  const handleOpen = (datas) => {
    setOpen(true);
    dispatch(datasEdit(datas));
  };

  const handleOpenDelete = (datas) => {
    setOpenEdit(true);
    dispatch(datasDelete(datas));
  }

  const viewTabs = loading
    ? <TableRow><TableCell colSpan={6}>Chargement</TableCell></TableRow>
    : donneesEnvoi.length !== 0 ?
      (
        donneesEnvoi.map((i, index) => {
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
                          onClick={() => handleOpenDelete(i)}
                          size='small'
                          variant='outlined'
                          sx={{ color: 'red', borderColor: 'red', '&:hover': { borderColor: 'red' } }}
                        >
                          <Delete sx={{ fontSize: '18px' }} />
                        </Button>
                        <Button onClick={() => handleOpen(i)} size='small' variant='outlined' sx={{ '&:hover': { borderColor: '#2eacb3' } }}>
                          <Edit sx={{ color: '#2eacb3', borderColor: '#2eacb3', fontSize: '18px' }} />
                        </Button>
                      </Stack>

                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
              <ModalEdit open={open} setOpen={setOpen} />
              <ModalDelete openEdit={openEdit} setOpenEdit={setOpenEdit} />
            </Fragment>
          )
        })
      )
      : <TableRow><TableCell colSpan={6}>Aucune donnees</TableCell></TableRow>

  return (
    <>
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

    </>
  )
}

export default ListeProjet
