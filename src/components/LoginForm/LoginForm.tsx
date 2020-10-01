import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import Message from '../Message/Message';

import { validateEmail, validatePassword } from '../../helpers/formValidators/Validators/formValidator';
import { requestHandler } from '../../helpers/requestHandlers/Handlers/requestHandler';

import { RequestHandlerProps } from '../../helpers/requestHandlers/Handlers/requestHandlerProps';
import { UserProps } from './LoginFormProps';

import logo from '../../assets/images/logo.png';

import './LoginForm.css';


const LoginForm = (): JSX.Element => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [hasEmailError, setHasEmailError] = useState<boolean>(false);
    const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {
        if (user) {
            handleFormClear();
        }
    }, [user]);

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setHasError(false);
        setUser(null);

        const hasFormErrors: boolean = handleFormErrors(email, password);

        if (hasFormErrors) {
            return; 
        }

        const requestHandlerProps: RequestHandlerProps = {
            email,
            password,
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
    
    const handleFormClear = () => {
        setEmail('');
        setPassword('');
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
                        disabled={isLoading}
                        onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(event.currentTarget.value)}
                        value={email}
                        autoFocus
                        variant='outlined'
                        margin='normal'
                        fullWidth
                        id='email'
                        label='Email'
                        name='email'
                        autoComplete='email'
                    />
                    <Message 
                        type='error' 
                        message='Provide a valid email address' 
                        isDisplayed={hasEmailError} 
                    />
                    <TextField
                        disabled={isLoading}
                        onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(event.currentTarget.value)}
                        value={password}
                        variant='outlined'
                        margin='normal'
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <Message 
                        type='error' 
                        message='Password should have at least 8 characters (at least 1 numeric and 1 upper letter)' 
                        isDisplayed={hasPasswordError} 
                    />
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
                    <Message 
                        type='primary' 
                        message={user ? `Welcome ${user.name} ${user.surname}! Logged in.` : ''}
                        isDisplayed={!!user} 
                    />
                    <Message 
                        type='error' 
                        message='User not found. Check your credentials and try again.' 
                        isDisplayed={hasError} 
                    />
                </form>
            </CardContent>
        </Card>
    );
};

export default LoginForm;