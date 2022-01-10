import { FormGroup, FormControl } from '@angular/forms';

export class FormValidatorService {
  constructor(private form: FormGroup) {}

  control(field: string) {
    return this.form.get(field) as FormControl;
  }

  isInvalid(field: string): boolean {
    return this.form.get(field)?.invalid! && this.form.get(field)?.touched! && this.form.get(field)?.dirty!;
  }

  markAllAsTouched() {
    Object.values(this.form.controls).forEach((control) => control.markAsTouched());
  }

  static confirmPassword(control: FormGroup): { [key: string]: boolean } | null {
    const { confirmPassword, password } = control.controls;
    return password.value === confirmPassword.value ? null : { confirmPassword: true };
  }
}
