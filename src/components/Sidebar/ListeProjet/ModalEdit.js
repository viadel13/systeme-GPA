import { Backdrop, Box, Button, Fade, FormHelperText, MenuItem, Modal, Select, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from "formik";
import axios from 'axios';
import { toast } from 'react-toastify';
import { DateField, DatePicker, DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const ModalEdit = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '90%', sm: 400},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      projet: "",
      date: dayjs('2022-04-17'),
      priorite: "",
      description: "",
    },

    onSubmit: async (values) => {

      // try {
      //   const response = await axios.post('http://127.0.0.1:5000/addProjet', { values, uid });
      //   if (response) {
      //     formik.handleReset();
      //     toast.success("Projet cree avec success", {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "light",
      //     });
      //   }
      // } catch (error) {
      //   formik.handleReset();
      //   if (navigator.onLine === false) {
      //     // Pas de connexion Internet

      //     toast.error(
      //       "Pas de connexion Internet. Veuillez vérifier votre connexion.",
      //       {
      //         position: "top-right",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "light",
      //       }
      //     );
      //   } else {
      //     toast.error("Une erreur s' est produite lors de la connexion", {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "light",
      //     });
      //   }
      // }

    },

    validate: (values) => {
      const errors = {}

      if (!values.projet) {
        errors.projet = 'Champ requis !';
      }
      if (!values.priorite) {
        errors.priorite = 'Champ requis !';
      }
      if (!values.description) {
        errors.description = 'Champ requis !';
      }

      return errors;
    }


  })

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open} >
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Modifier
            </Typography>
            <Box
              onSubmit={formik.handleSubmit}
              component="form"
              noValidate
              autoComplete="off"
              display='flex'
              flexDirection='column'
              alignItems='center'
              gap={2}
              justifyContent='center'
            >
              <Stack width='100%' gap={2} display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box component='div' sx={{ width: '100%', flex: { xs: 'initial', sm: 1 } }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: 'white' }}
                    name="projet"
                    placeholder="Nom projet"
                    error={formik.touched.projet && formik.errors.projet ? true : false}
                    onChange={formik.handleChange}
                    value={formik.values.projet}
                  />
                  {formik.touched.projet && formik.errors.projet && <FormHelperText sx={{ color: 'red' }}>{formik.errors.projet}</FormHelperText>}
                </Box>

                <Box component='div' sx={{ width: '100%', flex: { xs: 'initial', sm: 1 } }}>
                  <DesktopDatePicker
                    sx={{ width: '100%' }}
                    defaultValue={formik.values.date}
                    onChange={(date) => formik.setFieldValue('date', date)}
                  />
                </Box>
              </Stack>

              <div style={{ width: '100%' }}>
                <Select
                  onChange={formik.handleChange}
                  value={formik.values.priorite}
                  fullWidth
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  name="priorite"
                  error={formik.touched.priorite && formik.errors.priorite ? true : false}
                >
                  <MenuItem value="">
                    Choisir la priorite
                  </MenuItem>
                  <MenuItem value='Haut'>Haut</MenuItem>
                  <MenuItem value='Moyen'>Moyen</MenuItem>
                  <MenuItem value='Faible'>Faible</MenuItem>
                </Select>

                {formik.touched.priorite && formik.errors.priorite && <FormHelperText sx={{ color: 'red' }}>{formik.errors.priorite}</FormHelperText>}
              </div>

              <div style={{ width: '100%' }}>
                <TextField
                  fullWidth
                  rows={5}
                  multiline
                  placeholder='Description'
                  name="description"
                  error={formik.touched.description && formik.errors.description ? true : false}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description && <FormHelperText sx={{ color: 'red' }}>{formik.errors.description}</FormHelperText>}
              </div>
              <Stack direction='row' alignSelf='flex-start' spacing={2}>
                <Button type='submit' variant='contained' sx={{ textTransform: 'capitalize', }}>créer</Button>
                <Button
                  variant='outlined'
                  onClick={() => formik.handleReset()}
                  sx={{
                    textTransform:
                      'capitalize',
                    borderColor: '#555555',
                    color: '#555555',
                    '&:hover': {
                      backgroundColor: '#555555', color: 'white', borderColor: '#555555'
                    }
                  }}
                >Annuler
                </Button>
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default ModalEdit
