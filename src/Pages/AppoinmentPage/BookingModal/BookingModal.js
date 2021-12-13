import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../Hooks/useAuth'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ bookingModalOpen, handleBookingModalClose, booking, date, setBookingSuccess }) => {

  const { name, time, price } = booking;
  const { user } = useAuth();
  const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  console.log(date)
  const handleOnBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...initialInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);

  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // collect data
    const appointmentData = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString()

    }
    fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointmentData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSuccess(true);
          setTimeout(() => {
            setBookingSuccess(false);
          }, 9000)
          handleBookingModalClose();
        }
      })
    //will collect data and send to the server;

  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={bookingModalOpen}
      onClose={handleBookingModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={bookingModalOpen}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              sx={{ width: '100%', my: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: '100%', my: 1 }}
              id="outlined-size-small"
              name='patientName'
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: '100%', my: 1 }}
              id="outlined-size-small"
              name='email'
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: '100%', my: 1 }}
              id="outlined-size-small"
              name='phone'
              onBlur={handleOnBlur}
              defaultValue="Your Phone"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: '100%', my: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Box sx={{ textAlign: 'center', my: 2 }}>

              <Button type="submit" variant="contained" sx={{ backgroundColor: '#00e5ff' }}>Submit</Button>
            </Box>

          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
