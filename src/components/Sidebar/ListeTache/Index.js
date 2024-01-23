import { Box, Card, IconButton, Paper, Stack, Typography } from '@mui/material'
import { active } from '../../../redux/reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { SortableItems } from '../../SortableItems';
import { useState } from 'react';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

const ListeTache = () => {

  const activeState = useSelector((state) => state.systemeGPA.active);
  const dispatch = useDispatch();
  const [itemsTache, setItemsTache] = useState([
    {
      id: 1,
      title: "Création de Page d'Accueil",
      description:
        "Cette tâche implique la création de la page principale du site où les utilisateurs atterrissent en premier. La page d'accueil doit être attrayante.Elle doit également permettre aux utilisateurs de naviguer facilement vers d'autres sections du site.",
      width: '100%',
    },
    {
      id: 2,
      title: "Intégration de la Fonctionnalité de Recherche",
      description:
        "Mettre en place la fonctionnalité de recherche pour permettre aux utilisateurs de trouver rapidement des artistes, des albums et des chansons. Cette tâche consiste à intégrer un moteur de recherche robuste qui prend en charge la recherche en temps réel.",
      width: '100%',
    },
    {
      id: 3,
      title: "Intégration de la Fonctionnalité de Recherche",
      description:
        "Mettre en place la fonctionnalité de recherche pour permettre aux utilisateurs de trouver rapidement des artistes, des albums et des chansons. Cette tâche consiste à intégrer un moteur de recherche robuste qui prend en charge la recherche en temps réel.",
      width: '100%',
    },
    {
      id: 4,
      title: "Intégration de la Fonctionnalité de Recherche",
      description:
        "Mettre en place la fonctionnalité de recherche pour permettre aux utilisateurs de trouver rapidement des artistes, des albums et des chansons. Cette tâche consiste à intégrer un moteur de recherche robuste qui prend en charge la recherche en temps réel.",
      width: '100%',
    },

  ]);

  const getTachePos = id => itemsTache.findIndex(tache=>tache.id === id);

  function handleDragEnd(event) {
    const {active, over} = event;

    if(active.id === over.id) return;

    setItemsTache((itemsTache)=>{
      const originePos = getTachePos(active.id);
      const newPos = getTachePos(over.id)
      return arrayMove(itemsTache, originePos, newPos);
    })
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter: sortableKeyboardCoordinates,
    }),

  )

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
        <Typography component='span' sx={{ fontSize: '23px' }}>Liste des Taches</Typography>
      </Stack>

      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors} >
        <SortableItems items={itemsTache} />
      </DndContext>
    </Box>
  )
}

export default ListeTache
