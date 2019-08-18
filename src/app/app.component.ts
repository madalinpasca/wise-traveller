import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./domain/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User = null;
  profileImg: string | ArrayBuffer;
  profileHeight: number;
  profileWidth: number;

  public constructor(private router: Router) {
  }

  logOut() {
    this.user = null;
    localStorage.clear();
    this.router.navigate(['login']).finally()
  }

  setUser(user: User) {
    this.user = user;
    this.profileImg = user.urlProfile;
    const img = new Image();
    img.onload = () => {
      if (img.width > img.height) {
        this.profileWidth = 70;
        this.profileHeight = 70 * img.height / img.width;
      } else {
        this.profileWidth = 70 * img.width / img.height;
        this.profileHeight = 70;
      }
      this.profileImg = user.urlProfile;
    };
    img.src = user.urlProfile
  }
}
