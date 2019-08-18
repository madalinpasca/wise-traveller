import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {StringWrapper} from '../../domain/StringWrapper';
import {AuthToken} from '../../domain/AuthToken';
import {AuthService, GoogleLoginProvider} from 'angular5-social-login';
import {MatSnackBar} from "@angular/material";

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
              private snackBar: MatSnackBar,
              private ngZone: NgZone) {
  }
  email: string;
  password: string;

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

  private displayError(message: string) {
    this.snackBar.open(message, "Error", {
      duration: 6000,
      panelClass: 'red-snackbar'
    });
  }

  login(): void {
    this.userService.loginUser(this.email, this.password).subscribe(token => {
      localStorage.setItem('token', JSON.stringify(token));
      this.router.navigate(['homePage']).finally();
    }, ()=> {
      this.displayError("Login failed")
    });
  }

  submitLoginFacebook() {
    // noinspection TypeScriptValidateJSTypes
    FB.login((response) => {
      if (response.authResponse) {
        const access_token = FB.getAuthResponse().accessToken;
        this.loginWithFacebook(access_token);
      } else {
        this.displayError("Facebook login failed")
      }
    });
  }

  submitLoginGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.loginWithGoogle(userData.idToken);
      }
    ).catch(()=>{
      this.displayError("Google login failed")
    });
  }

  private loginWithGoogle(idToken: string) {
    this.userService.loginWithGoogle(idToken).subscribe((value: StringWrapper) => {
      if (value.value == idToken) {
        localStorage.setItem('last_token', JSON.stringify({token:idToken, type:"Google"}));
        this.router.navigate(['phoneNumber']).finally();
      } else {
        this.loginWithAuthorizationCode(value.value);
      }
    }, () => {
      this.displayError("Google login failed")
    });
  }

  private loginWithFacebook(accessToken: string) {
    this.userService.loginWithFacebook(accessToken).subscribe((value: StringWrapper) => {
      if (value.value == accessToken) {
        localStorage.setItem('last_token', JSON.stringify({token:accessToken, type:"Facebook"}));
        this.ngZone.run(()=> {
          this.router.navigate(['phoneNumber']).finally();
        });
      } else {
        this.loginWithAuthorizationCode(value.value);
      }
    }, () => {
      this.displayError("Facebook login failed")
    });
  }

  private loginWithAuthorizationCode(authorizationCode: string) {
    this.userService.loginWithAuthorizationCode(authorizationCode).subscribe((value: AuthToken) => {
      localStorage.setItem('token', JSON.stringify(value));
      this.router.navigate(['homePage']).finally();
    }, () => {
      this.displayError("Login failed")
    });
  }
}
