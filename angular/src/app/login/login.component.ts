import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	selector: 'login-cmp',
	templateUrl: 'login.component.html',
	styleUrls: ['login.scss']
})

export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  error = null;

  constructor(private userService:UserService, private router: Router){

  }
  login(){
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value)
      .subscribe((response)=>{
        console.log(response);
        this.router.navigate(['/dashboard/sent']);
      }, error => {
        console.log(error);
        this.error = error;
      })
  }
}
