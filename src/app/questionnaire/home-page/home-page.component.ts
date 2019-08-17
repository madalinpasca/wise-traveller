import {Component, OnInit} from '@angular/core';
import {SubjectArea} from "../../domain/SubjectArea";
import {Question} from "../../domain/Question";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string;
  selectedSubjectAreaId: number;
  subjectAreas: SubjectArea[];
  createdById: number;
  questions: Question[];
  selected: null;
  all = [{image:"gg", text:"gg", index:"0"},{image:"gg2", text:"gg2", index:"1"}];

  constructor() {
    this.createdById = parseInt(localStorage.getItem("userId"));

  }

  ngOnInit() {
  }

}
