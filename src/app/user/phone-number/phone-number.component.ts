import {Component, OnInit} from '@angular/core';
// import {MatSnackBar} from "@angular/material";
import {UserService} from "../../service/user.service";
import {StringWrapper} from "../../domain/StringWrapper";
import {Observable} from "rxjs";
import {AuthToken} from "../../domain/AuthToken";

@Component({
  selector: 'phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  private last_token: any;
  phonenumber: string;

  constructor(private userService: UserService
              /*private snackBar: MatSnackBar*/) {
  }

  ngOnInit() {
    this.last_token = JSON.parse(localStorage.getItem("last_token"));
  }

  // private displayPopup(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 6000
  //   });
  // }

  sendPhoneNumber() {
    let x : Observable<StringWrapper>;
    if (this.last_token.type == "Google") {
      x = this.userService.loginWithGoogle(this.last_token.token, this.phonenumber)
    } else if (this.last_token.type == "Facebook") {
      x = this.userService.loginWithFacebook(this.last_token.token, this.phonenumber)
    }
    x.subscribe((value: StringWrapper) => {
      this.loginWithAuthorizationCode(value.value)
    }, (/*error: any*/) => {
      console.log('User login failed');
    });
  }

  private loginWithAuthorizationCode(authorizationCode: string) {
    this.userService.loginWithAuthorizationCode(authorizationCode).subscribe((value: AuthToken) => {
      console.log('User logged!');
      localStorage.removeItem('last_token');
      localStorage.setItem('token', JSON.stringify(value));
    }, (/*errorAc*/) => {
      console.log('User login failed');
    });
  }
}
