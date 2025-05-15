import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { PaginationpageComponent } from 'src/app/paginationpage/paginationpage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [PaginationpageComponent],
})
export class HomeComponent {

  constructor(private authService : AuthService, private router : Router){}

  logout(){
    console.log("fgjkjh")
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
