import {Component, OnInit} from '@angular/core';
import {Group} from "../../domain/Group";
import {User} from "../../domain/User";
// import {UserService} from "../../service/user.service";
import {GroupService} from "../../service/group.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  selectedUserId: number;
  selectdGroupId: number;
  userFromUserGroups: User[];
  groupsOwnByUser: Group[];

  constructor(/*private userService: UserService,*/
              private groupService: GroupService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    let userId = parseInt(localStorage.getItem("userId"));
    // this.userService.userFromUserGroups(userId).subscribe(
    //   users => {
    //     this.userFromUserGroups = users;
    //   }
    // )

    this.groupService.groupsOwnByUser(userId).subscribe(groups => {
      this.groupsOwnByUser = groups;
    })
  }

  addUserToGroup() {
    // this.userService.addUserToGroup(this.selectedUserId, this.selectdGroupId).subscribe(
    //   response => {
    //     this.displayPopup(response, "Close")
    //   }, err => {
    //     this.displayPopup(err.error.message, "Close")
    //   })

  }

  private displayPopup(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000
    });
  }

  // sendPhoneNumber() {
  //
  // }
}
