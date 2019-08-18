import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {UserService} from "../../service/user.service";
import {StringWrapper} from "../../domain/StringWrapper";
import {Observable} from "rxjs";
import {AuthToken} from "../../domain/AuthToken";
import {Router} from "@angular/router";

@Component({
  selector: 'phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  private last_token: any;
  phonenumber: string;

  constructor(private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(){
    this.last_token = JSON.parse(localStorage.getItem("last_token"));
  }

  private displayError(message: string) {
    this.snackBar.open(message, "Error", {
      duration: 6000,
      panelClass: "red-snackbar"
    });
  }

  sendPhoneNumber() {
    let observable : Observable<StringWrapper>;
    if (this.last_token.type == "Google") {
      observable = this.userService.loginWithGoogle(this.last_token.token, this.phonenumber)
    } else if (this.last_token.type == "Facebook") {
      observable = this.userService.loginWithFacebook(this.last_token.token, this.phonenumber)
    }
    observable.subscribe((value: StringWrapper) => {
      this.loginWithAuthorizationCode(value.value)
    }, () => {
      this.displayError("Phone registration failed");
    });
  }

  private loginWithAuthorizationCode(authorizationCode: string) {
    this.userService.loginWithAuthorizationCode(authorizationCode).subscribe((value: AuthToken) => {
      localStorage.removeItem('last_token');
      localStorage.setItem('token', JSON.stringify(value));
      this.router.navigate(['homePage']).finally();
    }, () => {
      this.displayError("Phone registration failed");
    });
  }
}
