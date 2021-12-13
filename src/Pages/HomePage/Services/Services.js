import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'



const services = [
    {
        name: 'Fluoride treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque soluta vitae tenetur labore exercitationem sequi, voluptatibus magnam quia iure doloribus vero est nam perferendis blanditiis officia ratione in nostrum',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque soluta vitae tenetur labore exercitationem sequi, voluptatibus magnam quia iure doloribus vero est nam perferendis blanditiis officia ratione in nostrum',
        img: cavity
    },
    {
        name: 'Teeth witening',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque soluta vitae tenetur labore exercitationem sequi, voluptatibus magnam quia iure doloribus vero est nam perferendis blanditiis officia ratione in nostrum',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'success.main' ,m:2,fontWeight: 500 }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography  sx={{fontWeight: 'bold',m:5}} variant="h4" component="div">
                  Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map((service, index) => <Service

                            service={service} key={index} >
                        </Service>)

                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;