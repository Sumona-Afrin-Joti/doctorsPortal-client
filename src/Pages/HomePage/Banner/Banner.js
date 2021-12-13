import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import { Button, Typography, Container } from '@mui/material';
import bg from '../../../images/bg.png'


const Banner = () => {

    const bannerBg = {
        background: `url(${bg})`,   
    }
    const verticalCenter = {
        display: 'flex',
        height: 400,
        alignItems: 'center',
        border: '1px solid red'
    }
    return (
        <Container style={ bannerBg } sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{  ...verticalCenter,textAlign: 'left' }}>
                   <Box>
                   <Typography variant="h3">
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, color: 'gray' }} >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti deserunt in cumque at magnam illo dignissimos nulla voluptate doloribus aut?
                    </Typography>
                    <Button variant="contained" style={{ mt: 2, backgroundColor: '#5CE7ED' }}>Get Appoinment</Button>
                   </Box>
                </Grid>
                <Grid item xs={12} md={6} style={ verticalCenter }>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;