import { Container, Grid, Alert } from '@mui/material';
import React, { useState } from 'react';
import SingleAppointment from '../SingleAppointment/SingleAppointment';
import Typography from '@mui/material/Typography';


const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const availableAppointments = [
    {
      id: 1,
      name: 'Teeth Orthodintics',
      time: '8:00 AM - 9:00 AM',
      space: 10,
      price: 20
    },
    {
      id: 2,
      name: 'Cosmetic Dentistry',
      time: '10:05 AM - 11:30 AM',
      space: 5,
      price: 18
    },
    {
      id: 3,
      name: 'Teeth Cleaning',
      time: '5:00 PM - 6:30 PM',
      space: 8,
      price: 19
    },
    {
      id: 4,
      name: 'Cavity Protection',
      time: '7:00 AM - 9:30 AM',
      space: 5,
      price: 17
    },
    {
      id: 5,
      name: 'Padiatric Dental',
      time: '6:00 AM - 7:00 PM',
      space: 10,
      price: 15
    },
    {
      id: 6,
      name: 'Oral Surgery',
      time: '7:00 AM - 8:00 {M',
      space: 10,
      price: 10
    }

  ]
  return (
    <Container sx={{ my: 5 }}>
      <Typography sx={{ color: '#00e5ff', fontWeight: '500', mb: 3 }} variant="h5" gutterBottom component="div">
        Appointment Available on {date.toDateString()}
      </Typography>
      {
        bookingSuccess && <Alert severity="success">booking successfull</Alert>
      }
      <Grid container spacing={2} >
        {
          availableAppointments.map(singleAppointment =>

            <SingleAppointment
              key={singleAppointment.id}
              singleAppointment={singleAppointment}
              date={date}
              setBookingSuccess={setBookingSuccess}

            >

            </SingleAppointment>)
        }
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
