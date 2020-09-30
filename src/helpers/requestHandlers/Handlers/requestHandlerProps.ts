import { UserProps } from '../../../components/LoginForm/LoginFormProps';

export interface RequestHandlerProps {
    email: string;
    password: string;
    setIsLoading: (result: boolean) => void;
    setHasError: (result: boolean) => void;
    setUser: (props: UserProps | null) => void;
}
