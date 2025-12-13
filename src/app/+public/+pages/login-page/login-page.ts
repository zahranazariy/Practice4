import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router=inject(Router);
  message:string='';
  loginForm:LoginForm={
    username:'',
    password:'',
    keepMe:false,
  }
  check(){
    this.message='نام کاربری یا کلمه عبور صحیح نیست';

  }
}


interface LoginForm {
  username:string;
  password:string;
  keepMe:boolean;
}