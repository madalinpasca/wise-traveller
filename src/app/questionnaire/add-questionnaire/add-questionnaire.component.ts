import {Component, OnInit} from '@angular/core';
import {SubjectArea} from "../../domain/SubjectArea";
import {Question} from "../../domain/Question";

@Component({
  selector: 'app-add-questionnaire',
  templateUrl: './add-questionnaire.component.html',
  styleUrls: ['./add-questionnaire.component.css']
})
export class AddQuestionnaireComponent implements OnInit {
  title: string;
  selectedSubjectAreaId: number;
  subjectAreas: SubjectArea[];
  createdById: number;
  questions: Question[];

  constructor() {
    this.createdById = parseInt(localStorage.getItem("userId"));

  }

  ngOnInit() {
  }

}
