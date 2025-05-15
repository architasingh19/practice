import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]
})
export class LoginComponent {

  authForm : FormGroup
  isLoginMode : boolean = true;
  message = '';

  constructor(private fb : FormBuilder,private authService : AuthService , private router : Router){
    this.authForm = this.fb .group({
      username : ['',Validators.required ],
      password : ['',Validators.required ],
      email : ['',Validators.required ],
      age : [''],
      gender : [''],
      status : ['']
    })
  }

  onSubmit(){
    if(this.authForm.invalid){
      console.log(this.authForm.invalid)
      return;
    }

    if(this.isLoginMode){
      const {username, password} = this.authForm.value;
      if(this.authService.loginUser(username,password)){
        this.router.navigate(['./home'])
      }
      
      console.log("login")
    }
    else{
      this.authService.registerUser(this.authForm.value);
      this.message = "User registered successfully";
      this.toggleMode();
    }

  }


  toggleMode(){
    this.isLoginMode = !this.isLoginMode;
    this.message = ''
  }

}
