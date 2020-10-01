import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from  '@material-ui/core/Grid';

import LoginForm from '../../components/LoginForm/LoginForm';

import './Login.css';

const LoginPage = (): JSX.Element => {
    return (
        <Container className='login-container' fixed>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Grid item>
                    <LoginForm />
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginPage;