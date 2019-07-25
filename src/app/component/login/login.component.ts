import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginUser } from "../../model/login-user";
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: LoginUser = new LoginUser();
  loginForm: FormGroup;
  token: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        'mail': new FormControl(this.user.mail, [Validators.required]),
        'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
      }
    )
  }

  navigate() {
    console.log(this.user.mail);
    console.log(this.user.password);
    console.log(this.user)
    this.token = localStorage.getItem('token');
    this.http.post('login', this.user).subscribe(
      (response: any) => {
        if (response.statusCode == 201 || response.statusCode == 204) {
          localStorage.setItem('mail', this.user.mail);
          localStorage.setItem('password', this.user.password);
          localStorage.setItem('token', response.token);
          localStorage.setItem('code', response.statusCode);
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
          this.router.navigate(['/dddashboard']);

        } else if (response.statusCode == 202) {
          localStorage.setItem('mail', this.user.mail);
          localStorage.setItem('password', this.user.password);
          localStorage.setItem('token', response.token);
          localStorage.setItem('code', response.statusCode);
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
          this.router.navigate(['/tldashboard']);
        } else if (response.statusCode == 203) {
          localStorage.setItem('mail', this.user.mail);
          localStorage.setItem('password', this.user.password);
          localStorage.setItem('token', response.token);
          localStorage.setItem('code', response.statusCode);
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
          this.router.navigate(['/pmdashboard']);
        } else {
          console.log(response);
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });

        }
      }
    )
  }

}
