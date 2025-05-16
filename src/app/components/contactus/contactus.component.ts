import { Component } from '@angular/core';
import { BmiCalculatorComponent } from 'src/app/bmi-calculator/bmi-calculator.component';
import { FormComponent } from 'src/app/form/form.component';
import { ProgressBarComponent } from 'src/app/progress-bar/progress-bar.component';
import { StopwatchComponent } from 'src/app/stopwatch/stopwatch.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  standalone: true,
  imports:[FormComponent,ProgressBarComponent,BmiCalculatorComponent,StopwatchComponent]
})
export class ContactusComponent {

}
