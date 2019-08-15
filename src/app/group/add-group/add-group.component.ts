// import {Component, OnInit} from '@angular/core';
// import {User} from "../../domain/User";
// import {Group} from "../../domain/Group";
// import {GroupService} from "../../service/group.service";
// import {MatSnackBar} from "@angular/material";
// import {UserService} from "../../service/user.service";
//
// @Component({
//   selector: 'app-add-group',
//   templateUrl: './add-group.component.html',
//   styleUrls: ['./add-group.component.css']
// })
// export class AddGroupComponent implements OnInit {
//   ownGroup: boolean = false;
//   userFromUserGroups: User[];
//   groupsOwnByUser: Group[];
//   name: string = '';
//   selectedOwnerId: number;
//   parentGroupId: number;
//
//   constructor(private groupService: GroupService,
//               private userService: UserService,
//               private snackBar: MatSnackBar) {
//   }
//
//   ngOnInit() {
//     let userId = parseInt(localStorage.getItem("userId"));
//     this.userService.userFromUserGroups(userId).subscribe(
//       users => {
//         this.userFromUserGroups = users;
//       }
//     )
//
//     this.groupService.groupsOwnByUser(userId).subscribe(groups => {
//       this.groupsOwnByUser = groups;
//     })
//   }
//
//   addGroup() {
//     let userId = localStorage.getItem("userId");
//     if (this.ownGroup) {
//       this.selectedOwnerId = parseInt(userId);
//     }
//     this.groupService.addGroup(this.name, this.selectedOwnerId, this.parentGroupId).subscribe(resp => {
//       this.displayPopup(resp, "Close");
//     }, err => {
//       this.displayPopup(err.error.message, "Close")
//     })
//   }
//
//   private displayPopup(message: string, action: string) {
//     this.snackBar.open(message, action, {
//       duration: 6000
//     });
//   }
// }
