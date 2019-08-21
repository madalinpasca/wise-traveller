import {Component, OnInit} from '@angular/core';
import {AuthToken} from "../domain/AuthToken";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {UserService} from "../service/user.service";
import {User} from "../domain/User";
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogContentExampleDialogComponent} from './dialog-view-dialog/dialog-content-example-dialog';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  title: string;
  token: AuthToken;

  constructor(private router: Router,
              private appComponent: AppComponent,
              private userService: UserService,
              private dialog: MatDialog) {
    this.token = JSON.parse(localStorage.getItem("token"));
    if (!this.token) {
      router.navigate(['login']).finally();
    }
    userService.current(this.token).subscribe((user: User) => {
        appComponent.setUser(user);
      },
      () => {
        localStorage.clear();
        router.navigate(['login']).finally();
      });
  }

  ngOnInit() {
  }

  openDialog() {
    const ceva = new MatDialogConfig<string>();
    ceva.data = 'Ana are mere';
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);
    dialogRef.componentInstance.ana = 'Hotel Wise'

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
