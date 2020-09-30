import React, { useState, useEffect, FormEvent } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import { validateEmail, validatePassword } from '../../helpers/formValidators/Validators/formValidator';
import { requestHandler } from '../../helpers/requestHandlers/Handlers/requestHandler';
import { RequestHandlerProps } from '../../helpers/requestHandlers/Handlers/requestHandlerProps';
import { UserProps } from './LoginFormProps';

import logo from '../../assets/images/logo.png';

import './LoginForm.css';

const LoginForm = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [hasEmailError, setHasEmailError] = useState<boolean>(false);
    const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {

    }, [user]);

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setHasError(false);

        const {currentTarget: { email, password }} = event;

        const emailValue: string = email.value;
        const passwordValue: string = password.value;
        const hasFormErrors: boolean = handleFormErrors(emailValue, passwordValue);

        if (hasFormErrors) {
            return; 
        }

        const requestHandlerProps: RequestHandlerProps = {
            email: emailValue,
            password: passwordValue,
            setIsLoading,
            setHasError,
            setUser
        };

        requestHandler(requestHandlerProps);
    };

    const handleFormErrors = (email: string, password: string): boolean => {
        const isEmailValidated: boolean = validateEmail(email);
        const isPasswordValidated: boolean = validatePassword(password);
        const hasErrors: boolean = !isEmailValidated || !isPasswordValidated;

        setHasEmailError(!isEmailValidated);
        setHasPasswordError(!isPasswordValidated);

        return hasErrors;
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
                    style={{padding: '0'}}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
                    >
                        Sign in
                    </Button>
                    { isLoading && <LinearProgress /> }
                    {
                        hasError && 
                        <Typography color='error' display='inline'>
                            User not found. Check your credentials and try again.
                        </Typography>
                    }
                </form>
            </CardContent>
        </Card>
    );
};

export default LoginForm;