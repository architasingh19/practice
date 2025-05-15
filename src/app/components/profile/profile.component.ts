import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { PasswordCheckerComponent } from 'src/app/password-checker/password-checker.component';
import { SortableListComponent } from 'src/app/sortable-list/sortable-list.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports : [CommonModule, FormsModule,PasswordCheckerComponent, SortableListComponent]
})
export class ProfileComponent {
  user: any;

  chipText: string ="";
  chips : string[]=[]


  constructor(private authService: AuthService) {
    this.user = this.authService.getLoggedInUser();
  }

  addChip(){
    if(this.chipText.trim()){
      this.chips.push( this.chipText.trim());
      this.chipText = " "
    }
  }

  removeChip(index : number){
    this.chips.splice(index,1)
  }
}
