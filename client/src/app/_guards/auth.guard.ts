import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  // Here you can implement your authentication logic
  // For example, check if the user is logged in or has a valid token
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);


  if (accountService.currentUser()){
    // If the user is already logged in, you can redirect them or show a message
    // For example, redirect to the home page or show a toast message
    return true; // Allow access to the route
  } else {
    toastr.error('you shall not pass');
    return false;
  } 
};
