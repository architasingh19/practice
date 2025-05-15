import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]
})
export class BmiCalculatorComponent {

  bmiForm : FormGroup;
  bmiResult : string = '';
  bmiCategory : string = '';

  constructor(private fb : FormBuilder){
    this.bmiForm = this.fb.group({
      weight : ['',[Validators.required,Validators.minLength(1)]],
      height : ['',[Validators.required,Validators.minLength(1)]]
    })
  }

  calculateBMI(){
    const weight = this.bmiForm.value.weight;
    const height = this.bmiForm.value.height;

    if(!weight || !height || weight <=0 || height <= 0){
      alert("please enter positive number");
    }

    const bmi =weight / ((height/100)**2)
    const roundedBmi = parseFloat(bmi.toFixed(1));
    this.bmiResult = `Your BMI: ${roundedBmi}`;

    if (roundedBmi < 18.5) {
      this.bmiCategory = 'Category: Underweight';
    } else if (roundedBmi < 24.9) {
      this.bmiCategory = 'Category: Normal';
    } else if (roundedBmi < 29.9) {
      this.bmiCategory = 'Category: Overweight';
    } else {
      this.bmiCategory = 'Category: Obese';
    }
  }

  reset(){

    this.bmiForm.reset();
    this.bmiResult = '';
    this.bmiCategory = '';

  }
}
