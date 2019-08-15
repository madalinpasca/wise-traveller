import {Component, OnInit} from '@angular/core';
import {Group} from "../../domain/Group";
// import {UserService} from "../../service/user.service";
import {GroupService} from "../../service/group.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class AddUserComponent implements OnInit {
  name: string;
  email: string;
  selectedGroupId: number;
  groups: Group[];

  constructor(/*private userService: UserService,*/
              private groupService: GroupService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    let userId = parseInt(localStorage.getItem("userId"));
    this.groupService.groupsOwnByUser(userId).subscribe(groups => {
      this.groups = groups
    })
  }

  addUser() {
    // this.userService.addUser(this.name, this.email, this.selectedGroupId).subscribe(response => {
    //   this.displayPopup(response, "Close")
    // }, err => {
    //   this.displayPopup(err.error.message, "Close")
    //
    // })
  }

  private displayPopup(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000
    });
  }

  uploadFile($event) {
    console.log($event.target.files[0]);
  }
}
