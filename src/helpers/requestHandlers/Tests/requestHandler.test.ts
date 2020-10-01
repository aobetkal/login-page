import 'jest';
import axios from 'axios';

import { requestHandler } from '../Handlers/requestHandler';
import { RequestHandlerProps } from '../Handlers/requestHandlerProps';

jest.mock('axios');

describe('requestHandler', () => {

    const handlerProps: RequestHandlerProps = {
        email: 'test@gmail.com',
        password: 'password1',
        setIsLoading: jest.fn(),
        setHasError: jest.fn(),
        setUser: jest.fn()
    }

    //@ts-ignore
    axios.get.mockImplementation(() => Promise.resolve());

    it('should set loading to true', () => {
        requestHandler(handlerProps);

        expect(handlerProps.setIsLoading).toHaveBeenCalledWith(true);
    });

    it('should call fail endpoint with wrong credentials', () => {
        const endpoint: string = 'https://run.mocky.io/v3/12b0d4be-6edf-4a28-80c4-74a03e2822e3';
        requestHandler(handlerProps);

        expect(axios.get).toHaveBeenCalledWith(endpoint);
    });

    it('should call success endpoint with correct credentials', () => {
        const endpoint: string = 'https://run.mocky.io/v3/41a6919c-7a8b-4ce4-b3d5-2b7eb4d21a3c';
        const props: RequestHandlerProps = {
            ...handlerProps,
            email: 'johndoe@gmail.com',
            password: 'SecretPassword1'
        };
        requestHandler(props);

        expect(axios.get).toHaveBeenCalledWith(endpoint);
    });
});
