import {Component, OnInit} from '@angular/core';
// import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(/*private snackBar: MatSnackBar*/) {
  }

  ngOnInit() {}

  addUserToGroup() {

  }

  // private displayPopup(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 6000
  //   });
  // }
}
