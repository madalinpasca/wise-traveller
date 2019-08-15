import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/UserService';
import {error} from 'util';
import {MatSnackBar} from '@angular/material';
import {StringWrapper} from '../domain/StringWrapper';
import {AuthToken} from '../domain/AuthToken';
import {AuthService, GoogleLoginProvider} from 'angular5-social-login';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthService,
              private snackBar: MatSnackBar) {
  }
  email: string;
  password: string;
      else;

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '498604794014919',
        cookie     : true,
        xfbml      : true,
        version    : 'v4.0'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  login(): void {
    // this.userService.loginUser(this.email, this.password).subscribe
    // (message => {
    //   this.displayPopup(message, 'Close');
    //   this.userService.findUserByEmail(this.email).subscribe(user => {
    //     localStorage.setItem('userId', user.id.toString());
    //     localStorage.setItem('userEmail', user.email.toString());
    //   });
    // }, err => {
    //   this.displayPopup(err.error.message, 'Close');
    // });
  }

  private displayPopup(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000
    });
  }

  submitLogin() {
    console.log('submit login to facebook');
    // FB.login();
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        const access_token = FB.getAuthResponse().accessToken;
        this.loginWithFacebook(access_token);
      } else {
        console.log('User login failed');
      }
    });

  }

  submitLoginG() {
    console.log('submit login to google');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.loginWithGoogle(userData.idToken);

      }
    );

  }

  private loginWithGoogle(idToken: string) {
    this.userService.loginWithGoogle(idToken).subscribe((value: StringWrapper) => {
      this.loginWithAuthorizationCode(value.value);
    }, errorFb => {
      console.log('User login failed');
    });
  }

  private loginWithFacebook(access_token: string) {
    this.userService.loginWithFacebook(access_token).subscribe((value: StringWrapper) => {
      this.loginWithAuthorizationCode(value.value);
    }, errorFb => {
      console.log('User login failed');
    });
  }

  private loginWithAuthorizationCode(authorizationCode: string) {
    this.userService.loginWithAuthorizationCode(authorizationCode).subscribe((value: AuthToken) => {
      console.log('User logged!');
      localStorage.setItem('token', JSON.stringify(value));
      // TODO: @Madalin schimba pagina
    }, errorAc => {
      console.log('User login failed');
    });
  }
}
