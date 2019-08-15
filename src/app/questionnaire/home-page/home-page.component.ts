import {Component, OnInit} from '@angular/core';
import {SubjectArea} from "../../domain/SubjectArea";
import {Question} from "../../domain/Question";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.css']
})
export class HomePageComponent implements OnInit {
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
