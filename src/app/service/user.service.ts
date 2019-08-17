import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { StringWrapper} from '../domain/StringWrapper';
import {AuthToken} from '../domain/AuthToken';
// import {RegisterDto} from "../domain/RegisterDto";
import {ServerURL} from "./ServerURL";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  loginWithFacebook(accesToken: string, phoneNumber: string = null): Observable<StringWrapper> {
    return this.http.post<StringWrapper>(ServerURL.facebookLogin,
      {value: accesToken, phoneNumber: phoneNumber},
      {});
  }

  loginWithAuthorizationCode(value: string): Observable<AuthToken> {
    const formData = new FormData();
    formData.append('grant_type', 'authorization_code');
    formData.append('code', value);
    return this.http.post<AuthToken>(ServerURL.oauthLogin, formData, {
      headers: new HttpHeaders({
        Authorization: 'Basic Q2xpZW50OnBhc3N3b3Jk'
      })
    });
  }

  loginWithGoogle(idToken: string, phoneNumber: string = null) {
    return this.http.post<StringWrapper>(ServerURL.googleLogin,
      {value: idToken, phoneNumber: phoneNumber},
      {});
  }

  uploadProfilePicture(file: File): Observable<void>{
    const form = new FormData();
    form.append('file', file, file.name);
    return this.http.post<void>(ServerURL.uploadProfilePicture, form)
  }

  // addUser(register: RegisterDto): Observable<number> {
  //
  // }
}
