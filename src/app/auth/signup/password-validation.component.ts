import { AbstractControl } from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(form: AbstractControl) {
        const password = form.get('password').value; // to get value in input tag
        const confirmPassword = form.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            form.get('confirmPassword').setErrors({ MatchPassword: true });
        } else {
            console.log('true');
            return null;
        }
    }
}
