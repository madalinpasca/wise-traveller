import {Component, OnInit} from '@angular/core';
import {AuthToken} from '../domain/AuthToken';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {UserService} from '../service/user.service';
import {User} from '../domain/User';
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
    this.token = JSON.parse(localStorage.getItem('token'));
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
    dialogRef.componentInstance.locationname = 'Hotel Wise';
    dialogRef.componentInstance.aboutlocation = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
