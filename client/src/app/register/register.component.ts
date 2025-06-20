import { Component, input, output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService); // Inject the AccountService
  cancelRegister = output<boolean>();

  model: any = {};

  register() {
    this.accountService.regiser(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.cancel();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  cancel() {
    this.cancelRegister.emit(false); // Emit a primitive boolean
  }
}
