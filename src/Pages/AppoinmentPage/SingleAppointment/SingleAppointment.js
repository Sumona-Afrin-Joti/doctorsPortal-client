import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal'

const SingleAppointment = ({ singleAppointment, date, setBookingSuccess }) => {
  const { name, time, space, price } = singleAppointment;
  const [bookingModalOpen, setBookingModalOpen] = React.useState(false);
  const handleBookingModalOpen = () => setBookingModalOpen(true);
  const handleBookingModalClose = () => setBookingModalOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}  >
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography sx={{ color: '#00e5ff', fontWeight: '600' }} variant="h5" gutterBottom component="div">
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Price: $ {price}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} Spaces Available
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#00e5ff' }} onClick={handleBookingModalOpen} >BOOK APPOINMENT</Button>

        </Paper>
      </Grid>

      <BookingModal
        booking={singleAppointment}
        bookingModalOpen={bookingModalOpen} handleBookingModalClose={handleBookingModalClose}
        date={date}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>

  );
};

export default SingleAppointment;
