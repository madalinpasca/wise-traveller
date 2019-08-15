import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Questionnaire} from "../domain/Questionnaire";
import {Group} from "../domain/Group";
import {ServerURLs} from "./ServerURLs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }


  public getAllCreatedQuestionnaires(userId: number): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(ServerURLs.allCreatedQuestionnaires + userId, this.httpOptions);
  }

  public assignQuestionnaireToGroup(questionnaireId: number, groupId: number): Observable<string> {
    const body = JSON.stringify({questionnaireId: questionnaireId, groupId: groupId});
    return this.http.post<string>(ServerURLs.assignQuestionnaireToGroup, body, this.httpOptions);
  }
}
