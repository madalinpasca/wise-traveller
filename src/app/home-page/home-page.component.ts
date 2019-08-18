import {Component, OnInit} from '@angular/core';
import {AuthToken} from "../domain/AuthToken";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {UserService} from "../service/user.service";
import {User} from "../domain/User";

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
              private userService: UserService) {
    this.token = JSON.parse(localStorage.getItem("token"));
    if (!this.token) {
      router.navigate(['login']).finally();
    }
    userService.current(this.token).subscribe((user: User) => {
        appComponent.setUser(user)
      },
      () => {
        localStorage.clear();
        router.navigate(['login']).finally();
      });
  }

  ngOnInit() {
  }

}
