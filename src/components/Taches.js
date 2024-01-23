import { useSortable } from '@dnd-kit/sortable';
import { Box, Card, Grid, Typography } from '@mui/material';
import { CSS } from '@dnd-kit/utilities';

const Taches = ({ id, items }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),


  }
  return (
    <div ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >

      <Box
        bgcolor='#f0f0f0'
        component='div'
        sx={{ width: items.width, height: 'auto', p: '5px 20px', mb: '20px' }}
      >
        <Typography component='h6' fontSize='18px' mb={1}>
          {items.title}
        </Typography>
        <Typography component='p' fontSize='13px'>
          {items.description}
        </Typography>
      </Box>
    </div>



  )
}

export default Taches;
