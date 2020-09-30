export const validateEmail = (email: string): boolean => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

export const validatePassword = (password: string): boolean => {
    const hasMinLength: boolean = password.length > 7;
    const hasNumber: boolean = /\d/.test(password);
    const hasUpperLetter: boolean = /[A-Z]/.test(password);

    return hasMinLength && hasNumber && hasUpperLetter;
}