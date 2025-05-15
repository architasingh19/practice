import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class FormComponent {

  formSubmitted: boolean = false;
  contactForm : FormGroup
  constructor(private fb : FormBuilder){

    this.contactForm  = this.fb.group({
      name : ['',[Validators.required, Validators.minLength(3)]],
      email : ['',[Validators.required,Validators.email]],
      message : ['',[Validators.required,Validators.minLength(10)]]
    })
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.formSubmitted = true; // Show success message
    console.log(this.contactForm.value);
  }

}
