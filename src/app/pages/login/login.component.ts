import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: Login;
  constructor(private loginService:LoginService,private router:Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    //debugger;
  this.loginService.login(this.loginObj).subscribe((res: any) => {
   // debugger;
    if (res.result) {
      alert("Login Success")
      localStorage.setItem('angular17Token',res.data.token)
      this.router.navigateByUrl('/dashboard')
    } else {
      alert(res.message);
    }
  });
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
