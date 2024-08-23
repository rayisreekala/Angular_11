import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    userName: string = 'John Doe';
  
    constructor(private router: Router) {}
  
    logout() {
      console.log('User logged out');
      this.router.navigate(['/login']);
    }
  
    goToSettings() {
      this.router.navigate(['/settings']);
    }
}
