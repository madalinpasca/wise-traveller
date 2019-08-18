import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  password: string;
  email: string;

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private userService: UserService) {
  }

  ngOnInit() {}

  private displayError(message: string) {
    this.snackBar.open(message, "Error", {
      duration: 6000,
      panelClass: ['red-snackbar']
    });
  }

  resetPassword() {
    this.userService.resetPasswordNotLogged(this.email, this.password).subscribe(
      ()=> {
        this.router.navigate(['']).finally()
      },
      ()=> {
        this.displayError("Could not reset password!")
      }
    )
  }
}
