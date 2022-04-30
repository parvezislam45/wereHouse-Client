import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebas.init';



const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [setPhones] = useState('')
    const [error, setError] = useState('')
    const [signInWithGoogle, loading, errors] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }

    const googleSignIn = () => {
        signInWithGoogle()
        navigate('/home')
    }
    const handaleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirm = e => {
        setConfirmPassword(e.target.value)
    }
    const handlePhone = event => {
        setPhones(event.target.value)
    }
    const createNewUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
        navigate('/home')
    }
    const navigateLogin = () => {
        navigate = "/login"
    }
    if (errors) {

        return (
            <p>Error: {error.message}</p>
        );

    }
    if (loading) {
        return (
            <p>Looding......</p>
        )
    }
    if (user) {

        return (
            <div>
                <p>Signed In User: {user?.displayName}</p>
            </div>
        );

    }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={createNewUser}>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField onBlur={handaleEmail} fullWidth label='Email' type='emeil' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField onBlur={handlePhone} fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField onBlur={handlePassword} fullWidth label='Password' type='password' placeholder="Enter your password" />
                    <TextField onBlur={handleConfirm} fullWidth label='Confirm Password' type='password' placeholder="Confirm your password" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    {error ? error : ''}
                    <div className="mt-2">
                        <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </div>
                    <div className="mt-1">
                        <Button onClick={googleSignIn} type='submit' variant='contained' color='primary'>Google</Button>
                    </div>
                    <div className="mt-1">
                        <Button onClick={googleSignIn} type='submit' variant='contained' color='primary'>Microsoft</Button>
                    </div>
                    <p>Already Have a Account ? <Link to='/login' onClick={navigateLogin}>Log In</Link> </p>
                </form>
            </Paper>
        </Grid>
    )
};

export default SignUp;