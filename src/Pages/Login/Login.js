import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation,useHistory } from 'react-router-dom';
import loginPageImg from '../../images/login.png';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading,signInUsingGoogle, authError,setAuthError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        setAuthError('')
        loginUser(loginData.email,loginData.password,location,history)
    };

    const handleGoogleSignIn = () =>{
        signInUsingGoogle(location,history)
    }
    return (
        <Container>
            <Grid item container spacing={2}>
                <Grid xs={12} md={6} sx={{ mt: 5 }}>
                    {
                        !isLoading &&

                        <>
                            <Typography variant="body1" gutterBottom>Login</Typography>
                            <form onSubmit={handleLogin} >
                                <TextField
                                    sx={{ width: '75%', mt: 5 }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', mt: 5 }}
                                    id="standard-basic"
                                    label=" Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <br />
                                <Button variant="contained" type="submit" sx={{ width: '75%', mt: 3,backgroundColor: '#00e5ff' }} >Login</Button>
                                <p>
                                    New User?<NavLink to="/register">
                                        <Button variant="text"> Please Register</Button>
                                    </NavLink>
                                </p>

                            </form>

                            <p>..........................</p>
                            <Button onClick={handleGoogleSignIn} variant="contained" sx={{backgroundColor: '#00e5ff'}}> Google Sign In</Button>

                        </>
                    }

                    {
                        isLoading && <CircularProgress color="inherit" />
                    }
                    {
                        user?.email && <Alert severity="success">login successfull</Alert>
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

export default Login;