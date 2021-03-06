import { Button, Grid, Paper, TextField } from '@material-ui/core';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebas.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import picture from '../../Image/dfghh.png'
import login from '../../Image/login.jpg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)
    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleLogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    const navigateSignup = () => {
        navigate = "/signup"
    }
    const googleSignIn = () => {
        signInWithGoogle()
        navigate('/home')
    }
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    return (
        <div className="login grid grid-cols-2 sticky-top 0 bg-white">
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Login</h2>
                </Grid>
                <Grid align='center'>
                    <img src={login} alt="" />
                </Grid>
                <form className='mt-5' onSubmit={handleLogin}>
                    <TextField onBlur={handleEmail} fullWidth label='Email'type='email' placeholder="Enter your email" />
                    <TextField onBlur={handlePassword} fullWidth label='Password'type='password' placeholder="Enter your password" />
                    <p>{error?.message}</p>
                    {loading && <p>Loading</p>}
                    <div className='mt-5'>
                    <Button type='submit' variant='contained' color='primary'>Login</Button>
                    </div>
                    <div className="mt-3">
                    <Button onClick={ googleSignIn} className='mt-5' type='submit' variant='contained' color='primary'>Google</Button>
                    </div>
                    
                    <div className="mt-2">
                    <Button className='btn'
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                            alert('Sent email');
                        }}type="submit"variant='contained' color='primary'><span className='text'>Reset password</span></Button>
                    </div>
                        <p>Don't Have a Account ? <Link to ='/signup' onClick={navigateSignup}>Sign Up</Link> </p>
                </form>
            </Paper>
            </Grid>
            </div>
            
        </div>
    )
};

export default Login;