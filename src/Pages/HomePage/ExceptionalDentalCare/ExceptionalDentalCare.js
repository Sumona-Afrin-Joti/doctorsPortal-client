import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import img from '../../../images/treatment.png'

const ExceptionalDentalCare = () => {

    return (

        <Container>
            <Grid container spacing={2} sx={{my: 5}} >

                <Grid xs={12} md={4} >

                    <img width="300px" height="400px" src={img} alt="" />

                </Grid>
                <Grid xs={12} md={8} sx={{textAlign: "left"}} >
                    <h2>Exceptional Dental Care,
                        <br/> On Your Terms</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam autem quibusdam repellat necessitatibus nulla aspernatur totam delectus odio temporibus ipsum a sint amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi cum soluta facilis, porro quibusdam a eaque molestiae beatae obcaecati rerum quidem sed illo, praesentium aperiam fugiat magnam iste incidunt. Provident cupiditate exercitationem perferendis adipisci sint, quas aspernatur. Molestias neque cumque, iusto maiores praesentium ipsam eaque, maxime aperiam quis mollitia eos pariatur ut reprehenderit non eveniet sit. Molestias magnam cum minus error iure! Voluptates, enim, minima velit similique dolor mollitia perferendis consequuntur beatae dignissimos non inventore corporis illo voluptatum. Hic incidunt provident ducimus dolorem illum sunt commodi</p>

                    <Button variant="contained" sx={{backgroundColor: '#00e5ff',mt: 4}} >Learn More</Button>

                </Grid>

            </Grid>
        </Container>

    );
};

export default ExceptionalDentalCare;