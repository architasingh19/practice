import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.scss'],
  standalone: true,
  imports:[FormsModule,]
})
export class PasswordCheckerComponent {

  password : string ='';
  strength : string = "";


  checkPasswordStrength():void{
    if (this.password.trim() === '') {
      this.strength = "Weak";
      return;
    }
  
    const pwdLength = this.password.length;
    const hasUpper = /[A-Z]/.test(this.password);
    const hasLower = /[a-z]/.test(this.password);
    const hasNumber = /[0-9]/.test(this.password);
    const hasSpecial =  /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    
    let strengthScore : number = 0

    if(pwdLength >=  8) strengthScore++;
    if(hasUpper) strengthScore++;
    if(hasLower) strengthScore++;
    if(hasNumber) strengthScore++;
    if(hasSpecial) strengthScore++;

    if(strengthScore === 1){
      this.strength = "level1"
    }
    if(strengthScore >=2 && strengthScore <= 3){
      this.strength = "Level 2"
    }
    if(strengthScore >=4 && strengthScore <=5){
      this.strength = "Level 3"
    }
    


  }
  

}
