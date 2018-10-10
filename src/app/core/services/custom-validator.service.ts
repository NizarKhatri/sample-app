import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorService {
  constructor() {}

  autoCompleteSelectionValidator(control: FormControl): ValidationErrors | null {
    const selection: any = control.value;
    if (typeof selection === 'string') {
      return { autoCompleteSelectionValidator: true };
    }
    return null;
  }
}
