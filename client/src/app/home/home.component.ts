import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);
  registerMode = false;
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }


  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  // This method is used to cancel the registration mode
  // It sets the registerMode to false when called
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
  // This method is used to fetch users from the API
  // It uses the HttpClient to make a GET request to the specified URL
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: Response => this.users = Response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed")
    })
  }
}
