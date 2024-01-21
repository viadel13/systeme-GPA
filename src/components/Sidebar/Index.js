import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Typography, styled } from '@mui/material'
import user from '../../assets/images/user.png'
import { Assignment, Dashboard, NoteAdd, PlaylistAdd, Send, Source } from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const active = useSelector((state) => state.systemeGPA.active);
  const activeMobile = useSelector((state) => state.systemeGPA.activeMobile);

  const CustomStyled = styled(Link)({
    textDecoration: 'none',
    color: '#555555',
    display: 'block',
    width: '100%',
    
  })
  return (
    <Paper
      sx={{
        position: "fixed",
        left: { xs: activeMobile ? '-250px' : 0, sm: activeMobile ? '-250px' : 0, md: active ? '-250px' : 0 },
        width: '250px',
        transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out',
        overflowY: 'auto',

        height: 'calc(100% - 45px)',
        zIndex: 999
      }}
    >
      <Stack direction='column' spacing={0} sx={{ position: 'sticky', top: 0, zIndex: 999 }}>
        <Stack direction='row' padding="10px 16px" spacing={2} bgcolor='#f9fbfd'>
          <Avatar
            alt="user"
            src={user}
            sx={{ width: 55, height: 55, backgroundColor: '#e4ede7', padding: '5px' }}
          />
          <Box dispaly='flex' flexDirection='column'>
            <Typography component='p'>Bienvenue,</Typography>
            <Typography component='p' fontWeight={600}>User</Typography>
          </Box>
        </Stack>
        <Divider />
      </Stack>
      <Box>
        <List
          sx={{ width: '100%' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <Dashboard sx={{ color: '#2eacb3' }} />
              </ListItemIcon>
              <ListItemText primary={
                <CustomStyled to="/">
                  Dashboard
                </CustomStyled>
              } 
              />
            </ListItemButton>
          </ListItem>

          <Box display='flex' justifyContent='flex-start' m='12px 0' p='8px 5px' bgcolor='#e9f4f6' >
            <span style={{ fontSize: '20px' }}>Projet</span>
          </Box>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <Source sx={{ color: '#2eacb3' }} />
              </ListItemIcon>
              <ListItemText primary={
                <CustomStyled to="/ListeProjet">
                  Liste des Projets
                </CustomStyled>
              } 
               />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <NoteAdd sx={{ color: '#2eacb3' }} />
              </ListItemIcon>
              <ListItemText primary={
                <CustomStyled to="/ajoutProjet">
                  Ajouter un Projet
                </CustomStyled>
              } 
              />
            </ListItemButton>
          </ListItem>

          <Box display='flex' justifyContent='flex-start' m='12px 0' p='8px 5px' bgcolor='#e9f4f6' >
            <span style={{ fontSize: '20px' }}>Taches</span>
          </Box>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <Assignment sx={{ color: '#2eacb3' }} />
              </ListItemIcon>
              <ListItemText primary="Liste des Taches" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <PlaylistAdd sx={{ color: '#2eacb3' }} />
              </ListItemIcon>
              <ListItemText primary="Ajouter une Tache" />
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </Paper>
  )
}

export default Sidebar
