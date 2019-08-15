import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../domain/User";
import {Group} from "../domain/Group";
import {ServerURLs} from "./ServerURLs";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }


  groupsOwnByUser(userId: number): Observable<Group[]> {
    return this.http.get<Group[]>(ServerURLs.groupsOwnByUser + userId, this.httpOptions);

  }

  addGroup(name: string, selectedOwnerId: number, parentGroupId: number): Observable<string> {
    const body = JSON.stringify({
      name: name,
      parentGroupId: parentGroupId,
      ownerId: selectedOwnerId
    });
    return this.http.post<string>(ServerURLs.addGroup, body, this.httpOptions);
  }
}
