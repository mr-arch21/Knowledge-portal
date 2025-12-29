import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, map, of } from 'rxjs';

@Component({
  selector: 'app-profile-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.css',
  standalone:true,
})
export class ProfileForm {
  private fb = inject(FormBuilder)
  form = this.fb.group({
    name: ['', Validators.required],
    // email: ['', [Validators.required, Validators.email]],
    email: ['', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.emailTakenValidator],
      updateOn: 'blur'
    }],
    age: [null, [Validators.min(18)]]
  });
  emailTakenValidator(control: AbstractControl) {
  return of(control.value === 'test@test.com')
    .pipe(
      delay(1000),
      map(isTaken => isTaken ? { emailTaken: true } : null)
    );
}

  submit() {
    console.log(this.form.value);
  }
}
