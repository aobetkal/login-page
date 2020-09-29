import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import logo from '../../assets/images/logo.png';

import './LoginForm.css';

const LoginContainer = () => {
    return (
        <Card>
            <div className="card-header-container">
                <img 
                    className='card-header-logo' 
                    src={logo}
                    alt='Codibly' 
                />
                <CardHeader 
                    className='card-header'
                    title='Login'
                />
            </div>
            <CardContent>
                <form>
                    <TextField
                        autoFocus
                        variant='outlined'
                        margin='normal'
                        fullWidth
                        id='email'
                        label='Email'
                        name='email'
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                    />
                    <Button
                        style={{marginTop: '30px'}}
                        className='card-header-button'
                        type='submit'
                        fullWidth
                        variant='contained'
                    >
                        Sign in
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default LoginContainer;