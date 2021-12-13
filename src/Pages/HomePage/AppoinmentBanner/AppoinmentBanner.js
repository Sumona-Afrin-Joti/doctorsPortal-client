import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appoinmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: '150px'
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left'}}>
                    <Box>
                        <Typography variant="h6" style={{ color: '#5CE7ED' }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4"  sx={{my:3}}>
                            Make an Appoinment Today
                        </Typography>
                        <Typography variant="h6" style={{ color: 'white', fontSize: '14px', fontWeight: '300' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae veritatis odit a suscipit deleniti nemo molestiae cupiditate maxime alias.
                        </Typography>
                        <Button variant="contained" style={{mt:2 , backgroundColor: '#5CE7ED'}}>Learn More</Button>

                    </Box>

                  
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;