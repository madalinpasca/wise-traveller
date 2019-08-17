import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  title: string;
  createdById: number;

  constructor() {
    this.createdById = parseInt(localStorage.getItem("userId"));

  }

  ngOnInit() {
  }

}
