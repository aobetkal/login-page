import axios from 'axios';

import { RequestHandlerProps } from './requestHandlerProps';

const CORRECT_ENDPOINT: string = 'https://run.mocky.io/v3/41a6919c-7a8b-4ce4-b3d5-2b7eb4d21a3c';
const WRONG_ENDPOINT: string = 'https://run.mocky.io/v3/12b0d4be-6edf-4a28-80c4-74a03e2822e3';

export const requestHandler = (props: RequestHandlerProps): void => {
    const { email, password, setIsLoading, setHasError, setUser } = props;
    const hasCorrectCredentials: boolean = checkLoginCredentials(email, password);

    setIsLoading(true);

    axios.get(`${hasCorrectCredentials ? CORRECT_ENDPOINT : WRONG_ENDPOINT}`)
        .then(response => {
            const { data, status } = response;
            if (status === 200) {
                setUser(data.user);
            } else {
                setHasError(true);
                setUser(null);
            }
        })
        .catch(() => setHasError(true))
        .finally(() => setIsLoading(false));
};

const checkLoginCredentials = (email: string, password: string): boolean => {
    return email === 'johndoe@gmail.com' && password === 'SecretPassword1';
};
