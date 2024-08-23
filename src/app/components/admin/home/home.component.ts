import { Component, OnInit } from '@angular/core';

interface User {
  profile:string,
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  experience: string;
  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile='../assets/layout/images/lawyer.svg'
  users: User[] = [
    {profile:'../assets/layout/images/lawyer.svg', firstName: 'Venugopal', lastName: 'Karachi', contact: '+91 9123456789', email: 'kvenugopal@gmail.com', experience: '5 years' },
    { profile:'../assets/layout/images/lawyer.svg',firstName: 'Chidambaram', lastName: 'Palaniappan', contact: '+91 9817654321', email: 'cpalani@gmail.com', experience: '3 years' },
    { profile:'../assets/layout/images/lawyer.svg',firstName: 'Rohatgi', lastName: 'Mukul', contact: '+91 9192837465', email: 'rmukul@gmail.com', experience: '7 years' },
    { profile:'../assets/layout/images/lawyer.svg',firstName: 'Harish', lastName: 'Salve', contact: '+91 8564738291', email: 'sharish@gmail.com', experience: '4 years' },
    { profile:'../assets/layout/images/lawyer.svg',firstName: 'Subramanium', lastName: 'Gopal', contact: '+91 7148291637', email: 'sgopal@gmail.com', experience: '6 years' },
    {profile:'../assets/layout/images/lawyer.svg', firstName: 'Salman', lastName: 'Khurshid', contact: '+91 7167589302', email: 'ksalman@gmail.com', experience: '2 years' }
  ];

  selectedUser: User | null = null;
  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openUserDetail(user: User): void {
    this.selectedUser = user;
    this.showModal = true;
  }

  closeModal(): void {
    this.selectedUser = null;
    this.showModal = false;
  }
}
