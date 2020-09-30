import 'jest';

import { validateEmail, validatePassword } from '../Validators/formValidator';


describe('formValidator', () => {
    it('should check if provided email is correct email', () => {
        const correctEmail: string = 'test@gmail.com';
        const wrongEmail: string = 'test.com';

        const correctResult: boolean = validateEmail(correctEmail);
        const wrongResult: boolean = validateEmail(wrongEmail);

        expect(correctResult).toBe(true);
        expect(wrongResult).toBe(false);
    });

    it('should check if provided password is strong enough password', () => {
        const correctPassword: string = 'Password1';
        const shortPassword: string = 'Passw';
        const passwordWithoutNumber: string = 'Password';
        const passwordWithoutUpperLetter: string = 'password1';

        const correctResult: boolean = validatePassword(correctPassword);
        const shortPasswordResult: boolean = validatePassword(shortPassword);
        const noNumberPasswordResult: boolean = validatePassword(passwordWithoutNumber);
        const noUpperLetterPasswordResult: boolean = validatePassword(passwordWithoutUpperLetter);

        expect(correctResult).toBe(true);
        expect(shortPasswordResult).toBe(false);
        expect(noNumberPasswordResult).toBe(false);
        expect(noUpperLetterPasswordResult).toBe(false);
    });
});
