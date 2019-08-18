import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { StringWrapper} from '../domain/StringWrapper';
import {AuthToken} from '../domain/AuthToken';
import {RegisterDto} from "../domain/RegisterDto";
import {ServerURL} from "./ServerURL";
import {IdWrapper} from "../domain/IdWrapper";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  loginWithFacebook(accesToken: string, phoneNumber: string = null): Observable<StringWrapper> {
    return this.http.post<StringWrapper>(ServerURL.facebookLogin, {value: accesToken, phoneNumber: phoneNumber});
  }

  loginWithGoogle(idToken: string, phoneNumber: string = null) {
    return this.http.post<StringWrapper>(ServerURL.googleLogin, {value: idToken, phoneNumber: phoneNumber},);
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

  uploadProfilePicture(file: File, id: number): Observable<void>{
    const form = new FormData();
    form.append('file', file, file.name);
    return this.http.post<void>(ServerURL.uploadProfilePicture + id + "/", form);
  }

  addUser(register: RegisterDto): Observable<IdWrapper> {
    return this.http.post<IdWrapper>(ServerURL.register, register);
  }

  resetPasswordNotLogged(email: string, password: string): Observable<void> {
    return this.http.post<void>(ServerURL.resetPasswordNotLogged, {email: email, password: password});
  }

  loginUser(email: string, password: string): Observable<AuthToken> {
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', email);
    formData.append('password', password);
    return this.http.post<AuthToken>(ServerURL.oauthLogin, formData, {
      headers: new HttpHeaders({
        Authorization: 'Basic Q2xpZW50OnBhc3N3b3Jk'
      })
    });
  }
}
