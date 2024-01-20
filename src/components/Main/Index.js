import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';


const Main = ({ setActive, active }) => {

  const media = useMediaQuery('(max-width:768px)');
 
  return (
    <Box
      sx={{
        width: media ? '100%' : active ? '100%' : 'calc(100% - 250px)',
        position: 'relative',
        left: { xs: 0, sm: 0, md: active ? '0' : '250px' },
        transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out',

      }}>
      <Stack
        direction='row'
        alignItems='center'
        sx={{ padding: { xs: '0 8px', sm: '0 30px', md: '0 25px' } }}
      >
        {
          !active
            ? <IconButton
              onClick={() => setActive(!active)}
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            >
              <ArrowBack sx={{ color: '#0d6efd' }} />
            </IconButton>
            : <IconButton
              onClick={() => setActive(!active)}
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            >
              <ArrowForward sx={{ color: '#0d6efd' }} />
            </IconButton>
        }
        <Typography component='span' sx={{ fontSize: '23px' }}>Dashboard</Typography>
      </Stack>

    </Box>
  )
}

export default Main
