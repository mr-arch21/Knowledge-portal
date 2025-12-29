import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.min(18)]]
  });

  submit() {
    console.log(this.form.value);
  }
}
