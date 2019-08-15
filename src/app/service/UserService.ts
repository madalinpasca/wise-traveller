import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { StringWrapper} from '../domain/StringWrapper';
import {AuthToken} from '../domain/AuthToken';

@Injectable()
export class UserService {
  private facebookLoginUrl = 'http://localhost:8080/unauthenticated/authorize/facebook';
  private googleLoginUrl = 'http://localhost:8080/unauthenticated/authorize/google';
  private oauthUrl = 'http://localhost:8080/oauth/token';
  constructor(private http: HttpClient) { }

  loginWithFacebook(accesToken: string): Observable<StringWrapper> {
    return this.http.post<StringWrapper>(this.facebookLoginUrl, {value: accesToken}, {});
  }

  loginWithAuthorizationCode(value: string): Observable<AuthToken> {
    const formData = new FormData();
    formData.append('grant_type', 'authorization_code');
    formData.append('code', value);
    return this.http.post<AuthToken>(this.oauthUrl, formData, {
      headers: new HttpHeaders({
        Authorization: 'Basic Q2xpZW50OnBhc3N3b3Jk'
      })
    });
  }

  loginWithGoogle(idToken: string) {
    return this.http.post<StringWrapper>(this.googleLoginUrl, {value: idToken}, {});
  }
}
