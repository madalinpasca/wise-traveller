import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  leavingdate = new FormControl(new Date());
  arivingdate = new FormControl(new Date());
  selected = 'option2';
  roomTypes = [
    'Family',
    'Kids',
    'Couple'
  ];
  constructor() { }

  ngOnInit() {
  }

}
