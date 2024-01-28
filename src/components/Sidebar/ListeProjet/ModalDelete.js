import { Backdrop, Box, Button, Fade, Modal, Stack, Typography } from '@mui/material'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ModalDelete = ({openEdit, setOpenEdit}) => {

  const handleClose = () => setOpenEdit(false);
  const datasDelete = useSelector((state) => state.systemeGPA.datasDelete);

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`https://api-systemegp.onrender.com/${datasDelete.id}`)
      if (response) {
        toast.success("Supprimer avec success", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose();
      }
    } catch (error) {
      
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '90%', sm: 400},
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEdit}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openEdit} >
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" mb={2}>
              Supprimer
            </Typography>
            <Typography variant='p'>Voulez vous supprimer ?</Typography>
            <Stack direction='row' spacing={2} mt={2}>
              <Button variant='contained' sx={{backgroundColor: 'red'}}  onClick={handleSubmit} >Oui</Button>
              <Button variant='contained' onClick={handleClose} >Non</Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ModalDelete
