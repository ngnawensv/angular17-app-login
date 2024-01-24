import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: Login;
  constructor(private http:HttpClient) {
    this.loginObj = new Login();
  }

onLogin() {
  this.http.post
  }
}

export class Login{
  emailId: string; //"bel@gmail.com";
  password: string; //"123456789";
  constructor() {
    this.emailId = '';
    this.password = '';
  }

}
