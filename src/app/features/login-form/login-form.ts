import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
     private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    email: ['', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.emailTakenValidator],
      updateOn: 'blur'
    }],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  submit() {
    if (this.form.invalid) return;

    console.log('Login Form Value:', this.form.value);
  }

  // ---- Async Validator (Mock) ----
  emailTakenValidator(control: AbstractControl) {
    return of(control.value === 'test@test.com').pipe(
      delay(1000),
      map(isTaken => (isTaken ? { emailTaken: true } : null))
    );
  }
}
