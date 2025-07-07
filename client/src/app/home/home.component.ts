import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registerMode = false;




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
}
