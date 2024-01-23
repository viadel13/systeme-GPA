import { SortableContext, rectSortingStrategy, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box, Card, Paper, Stack, Typography } from "@mui/material";
import Taches from './Taches';
import badge from '../assets/images/badge.png'

export function SortableItems(props) {

  return (

    <Card 
      elevation={0} 
      sx={{ 
        width: '100%', 
        padding: '16px', 
        height: 'auto', 
        display: 'flex', 
        gap: 2, 
        backgroundColor: '#f9fbfd', 
        position: 'relative',
        touchAction: 'none',
        flexDirection: {xs: 'column', sm: 'column', md: 'row'},
        zIndex: 1
        }}
    >
      <Paper elevation={0} sx={{ display: 'flex', border: '1px solid #f0f0f0', flexDirection: 'column', padding: '15px 15px', position: 'relative', zIndex: 1, height: '100%', width: '100%' }} gap={1}>
        <Typography 
          variant='h6'
          position='absolute'
          sx={{
            fontSize: '12px',
            right: '23px',
            top: '1px',
            zIndex: 3,
            transform: 'rotate(-45deg)'
          }}
        >
          Haut
        </Typography>
        <Stack mb={8}  sx={{
            position: 'absolute',
            right: 0,
            top: '-10px',
            zIndex: 2,
          }}>
          <img
            src={badge}
            alt='bage'
            width={70}
          />

        </Stack>

        <SortableContext items={props.items} strategy={verticalListSortingStrategy} >
          {
            props.items.filter(i => i.priorite === 'haut').map((i) => <Taches id={i.id} key={i.id} items={i} />)
          }
        </SortableContext>
      </Paper>
      <Paper elevation={0} sx={{ display: 'flex', border: '1px solid #f0f0f0', flexDirection: 'column', padding: '15px 15px', position: 'relative', zIndex: 1, height: '100%', width: '100%'  }} gap={1}>
        <Typography 
          variant='h6'
          position='absolute'
          sx={{
            fontSize: '12px',
            right: '18px',
            top: '1px',
            zIndex: 3,
            transform: 'rotate(-45deg)'
          }}
        >
          Moyen
        </Typography>
        <Stack mb={8}  sx={{
            position: 'absolute',
            right: 0,
            top: '-10px',
            zIndex: 2,
          }}>
          <img
            src={badge}
            alt='bage'
            width={70}
          />

        </Stack>

        <SortableContext items={props.items} strategy={verticalListSortingStrategy} >
          {
            props.items.filter(i => i.priorite === 'moyen').map((i) => <Taches id={i.id} key={i.id} items={i} />)
          }
        </SortableContext>
      </Paper>
      <Paper elevation={0} sx={{ display: 'flex', border: '1px solid #f0f0f0', flexDirection: 'column', padding: '15px 15px', position: 'relative', zIndex: 1, height: '100%', width: '100%'  }} gap={1}>
        <Typography 
          variant='h6'
          position='absolute'
          sx={{
            fontSize: '12px',
            right: '23px',
            top: '1px',
            zIndex: 3,
            transform: 'rotate(-45deg)'
          }}
        >
          Bas
        </Typography>
        <Stack mb={8}  sx={{
            position: 'absolute',
            right: 0,
            top: '-10px',
            zIndex: 2,
          }}>
          <img
            src={badge}
            alt='bage'
            width={70}
          />

        </Stack>

        <SortableContext items={props.items} strategy={verticalListSortingStrategy} >
          {
            props.items.filter(i => i.priorite === 'bas').map((i) => <Taches id={i.id} key={i.id} items={i} />)
          }
        </SortableContext>
      </Paper>
    </Card>


  )
};

