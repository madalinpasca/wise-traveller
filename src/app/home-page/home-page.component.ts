import {Component, OnInit} from '@angular/core';
import {AuthToken} from '../domain/AuthToken';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {UserService} from '../service/user.service';
import {User} from '../domain/User';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogContentExampleDialogComponent} from './dialog-view-dialog/dialog-content-example-dialog';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  locationname= "Hotel Wise"
  currentRate = 3.14;
  title: string;
  token: AuthToken;
  image: any;
  images = ['../assets/ex1.jpg', '../assets/ex2.jpg', '../assets/ex3.jpg'];

  tiles = [
    {image: this.images[1] , cols: 1, rows: 1, color: '#424242', },
    {image: this.images[0] , cols: 1, rows: 1, color: '#424242', },
    {image: this.images[2] , cols: 1, rows: 1, color: '#424242', }
  ];
  // AICI PUI IMAGINILE IN STRINGUL tileimg
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
    dialogRef.componentInstance.locationname = this.locationname;
    dialogRef.componentInstance.roomstype = 'Imperial';
    dialogRef.componentInstance.aboutlocation = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
      'officia deserunt mollit anim id est laborum';
    dialogRef.componentInstance.doublebads = 1;
    dialogRef.componentInstance.singlebads = 2;
    dialogRef.componentInstance.freerooms = 5;
    dialogRef.componentInstance.roomsnumber = 12;
    dialogRef.componentInstance.breakfastprice = 15;
    dialogRef.componentInstance.lunchprice = 35;
    dialogRef.componentInstance.dinnerprice = 20;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
