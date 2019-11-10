import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  password: string;
  conf_password: string;

  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit() {}

  onSignup(form: NgForm) {
    console.log(form);
    const email = form.form.value.email;
    const password = form.form.value.password;
    const conf_password = form.form.value.conf_password;

    if (password !== conf_password) {
      return;
    }
    this.authService.signup(email, password);
  }
}
