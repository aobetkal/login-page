import React, { useState, useEffect, FormEvent } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { validateEmail, validatePassword } from '../../helpers/formValidators/Validators/formValidator';

import logo from '../../assets/images/logo.png';

import './LoginForm.css';

const LoginForm = (): JSX.Element => {
    const [hasEmailError, setHasEmailError] = useState<boolean>(false);
    const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);

    useEffect(() => {

    }, [hasEmailError, hasPasswordError]);

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const {currentTarget: { email, password }} = event;

        const emailValue: string = email.value;
        const passwordValue: string = password.value;

        setHasEmailError(!validateEmail(emailValue));
        setHasPasswordError(!validatePassword(passwordValue));

        if (hasEmailError || hasPasswordError) {
            return; 
        }

    };

    return (
        <Card style={{maxWidth: '500px'}}>
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
                <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleFormSubmit(event)}>
                    <TextField
                        autoFocus
                        variant='outlined'
                        margin='normal'
                        fullWidth
                        id='email'
                        label='Email'
                        name='email'
                        autoComplete='email'
                    />
                    {
                        hasEmailError && 
                        <Typography color='error' display='inline'>
                            Provide a valid email address
                        </Typography>
                    }
                    <TextField
                        variant='outlined'
                        margin='normal'
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    {
                        hasPasswordError && 
                        <Typography color='error' display='inline'>
                            Password should have at least 8 characters (at least 1 numeric and 1 upper letter)
                        </Typography>
                    }
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

export default LoginForm;