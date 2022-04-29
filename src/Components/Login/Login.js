import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
const headerStyle = { margin: 0 }

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h2 style={headerStyle}>Login</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                    <form >
                        <TextField fullWidth label='Email' type='email' placeholder="Enter your email" />
                        <TextField fullWidth label='Password' type='password' placeholder="Enter your password" />
                        {/* <p>{error?.message}</p> */}
                        {/* {loading && <p>Loading</p>} */}
                        <div className='mt-5'>
                            <Button type='submit' variant='contained' color='primary'>Login</Button>
                        </div>
                        <div className="mt-2">
                            {/* <Button className='btn'
                                onClick={async () => {
                                    await sendPasswordResetEmail(email);
                                    alert('Sent email');
                                }} type="submit" variant='contained' color='primary'><span className='text'>Reset password</span></Button> */}
                        </div>
                        <p>Don't Have a Account ? <Link to='/signup'>Sign Up</Link> </p>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;