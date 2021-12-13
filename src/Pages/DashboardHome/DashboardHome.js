import { Grid } from '@mui/material';
import React from 'react';
import DboardAppointment from '../DboardAppointment/DboardAppointment';
import Calender from '../HomePage/Shared/Calender/Calender';

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>

      <Grid item sx={12} md={5}>
        <Calender
          date={date}
          setDate={setDate}
        ></Calender>
      </Grid>
      <Grid item sx={12} md={7}>
        <DboardAppointment date={date}></DboardAppointment>
      </Grid>

    </Grid>
  );
};

export default DashboardHome;
