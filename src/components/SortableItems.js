import { SortableContext, rectSortingStrategy, verticalListSortingStrategy } from '@dnd-kit/sortable';
import {  Card, Stack, Typography } from "@mui/material";
import Taches from './Taches';

export function SortableItems(props) {

  return (
    <Card elevation={0} sx={{ width: '100%', padding: '16px', height: '100%', touchAction: 'none' }}>
      <Stack sx={{display: 'flex', flexDirection:{xs: 'column', sm: 'column', md: 'row'}}} gap={1}>
        <SortableContext items={props.items} strategy={rectSortingStrategy} lock>
          {props.items.map((i) => <Taches id={i.id} key={i.id} items={i} />)}
        </SortableContext>
      </Stack>
    </Card>
  )
};

