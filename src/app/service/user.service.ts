// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {Observable} from "rxjs";
// import {ServerURLs} from "./ServerURLs";
// import {User} from "../domain/User";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   httpOptions = {
//     headers: new HttpHeaders({'Content-Type': 'application/json'})
//   };
//
//   constructor(private http: HttpClient) {
//   }
//
//   loginUser(email: String, password: String): Observable<string> {
//     const body = JSON.stringify({email: email, password: password});
//     return this.http.post<string>(ServerURLs.loginUser, body, this.httpOptions);
//   }
//
//   findUserByEmail(email: string): Observable<User> {
//     return this.http.get<User>(ServerURLs.getUserByEmail + email, this.httpOptions)
//   }
//
//   userFromUserGroups(userId: number): Observable<User[]> {
//     return this.http.get<User[]>(ServerURLs.userFromUserGroups + userId, this.httpOptions)
//
//   }
//
//   addUser(name: string, email: string, selectedGroupId: number): Observable<string> {
//     const body = JSON.stringify({name: name, email: email, groupId: selectedGroupId});
//     return this.http.post<string>(ServerURLs.addUser, body, this.httpOptions);
//   }
//
//   addUserToGroup(userID: number, groupID: number):Observable<string> {
//     const body = JSON.stringify({userId: userID, groupId: groupID});
//     return this.http.post<string>(ServerURLs.addUserToGroup, body, this.httpOptions);
//
//   }
// }
