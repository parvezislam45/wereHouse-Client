import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }


const SignUp = () => {
    return (
        <div>
            <h1>Sign-Up</h1>
            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField  fullWidth label='Email'type='emeil' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField  fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField  fullWidth label='Password'type='password' placeholder="Enter your password" />
                    <TextField  fullWidth label='Confirm Password' type='password'placeholder="Confirm your password" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                     <div className="mt-2">
                     <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                     </div>
                     <div className="mt-1">
                     <Button  type='submit' variant='contained' color='primary'>Google</Button>
                     </div>
                     <div className="mt-1">
                     <Button type='submit' variant='contained' color='primary'>Microsoft</Button>
                     </div>
                     <p>Already Have a Account ? <Link to ='/login'>Log In</Link> </p>
                </form>
            </Paper>
        </Grid>
        </div>
    );
};

export default SignUp;