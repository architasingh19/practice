import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-number-game',
  templateUrl: './guess-number-game.component.html',
  styleUrls: ['./guess-number-game.component.scss'],
  standalone : true,
  imports : [CommonModule,FormsModule]
})
export class GuessNumberGameComponent {

  userGuess : number | null = 0 ;
  attempts : number = 0 ;
  message : string = "";
  randomNumber : number = 0;

  constructor(){
    this.resetGuess();
  }



  checkedGuess(){
    if(this.userGuess === null){
      this.message = "Please enter a number between 1 and 100.";
      return;
    }

    if(this.userGuess < 1 || this.userGuess > 100){
      this.message = "Please enter a number between 1 and 100."
      return;
    }

    this.attempts++;

    if(this.userGuess === this.randomNumber){
      this.message = `Congratulations! You guessed the number in ${this.attempts} attempts.`;
    }
    else if(this.userGuess > this.randomNumber){
      this.message = 'Too high! Try again.';
    }
    else if(this.userGuess < this.randomNumber){
      this.message = 'Too low! Try again.';
    }
  }

  resetGuess(){
    this.randomNumber = Math.floor(Math.random()*100) + 1 ;
    console.log(this.randomNumber)
    this.userGuess = null;
    this.attempts = 0;
    this.message = "";
  }
}
