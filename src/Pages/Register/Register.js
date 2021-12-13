import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import loginPageImg from '../../images/login.png';
import useAuth from '../Hooks/useAuth';
const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user, authError, setAuthError } = useAuth();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            setAuthError("password didn't match")
            return;
        }

        registerUser(loginData.email, loginData.password,loginData.name,history)
    }

    return (
        <Container>
            <Grid item container spacing={2}>
                <Grid xs={12} md={6} sx={{ mt: 5 }}>

                    {
                        !isLoading && <>
                            <Typography variant="body1" gutterBottom>Register</Typography>
                            <form onSubmit={handleRegister} >
                                <TextField
                                    sx={{ width: '75%', mt: 5 }}
                                    id="standard-basic"
                                    label="Your Name"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', mt: 5 }}
                                    id="standard-basic"
                                    type="email"
                                    label="Your Email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', mt: 5 }}
                                    id="standard-basic"
                                    label=" Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', mt: 5 }}
                                    id="standard-basic"
                                    label=" Re-type-password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                />
                                <br />
                                <Button variant="contained" type="submit" sx={{ width: '75%', mt: 3 }} >Register</Button>
                                <p>
                                    Alreadey Registered?<NavLink to="/login">
                                        <Button variant="text"> Please Log in</Button>
                                    </NavLink>
                                </p>

                            </form>
                        </>
                    }

                    {
                        isLoading && <CircularProgress color="inherit" />
                    }
                    {
                        user?.email && <Alert severity="success">Registerd successfull</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginPageImg} alt="" ></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;