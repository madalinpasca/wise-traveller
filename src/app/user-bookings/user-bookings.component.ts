import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserBookingsComponent implements OnInit {
  currentRate = 3.14;
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['HotelName', 'ArivingDate', 'LeavingDate', 'BookingRequestStatus'];
  expandedElement: BookingDetails | null;

  constructor() {
  }

  ngOnInit() {
  }

}


export interface BookingDetails {
  HotelName: string;
  hotelimage: string;
  BookingRequestStatus: string;
  ArivingDate: string;
  LeavingDate: string;
  requestdate: string;
  totalprice: number;
  personsB: number;
  personsL: number;
  personsD: number;
  colored: string;
  oemail: string;
  olastname: string;
  ofirstname: string;
  ophone: number;
  rooms: any;
  ratingvalue: number;
}

const ELEMENT_DATA: BookingDetails[] = [
    {
      BookingRequestStatus: 'aproved',
      HotelName: 'Hotel Palace',
      hotelimage: '../assets/ex3.jpg',
      ArivingDate: '12/11/2019',
      LeavingDate: '17/11/2019',
      rooms: [{roomtype: 'Family', roomnumbers: 2, },
        {roomtype: 'Imperial', roomnumbers: 3, }],
      totalprice: 700,
      personsB: null,
      personsL: 23,
      personsD: null,
      ophone: 748523912,
      colored: 'lime',
      ofirstname: 'Popescu',
      olastname: 'George',
      oemail: 'popescu.george@palacehotel.com',
      requestdate: '25/10/2019',
      ratingvalue: 4.7,
    },
    {
      BookingRequestStatus: 'finished',
      HotelName: 'Hotel Palace',
      hotelimage: '../assets/ex1.jpg',
      ArivingDate: '12/11/2019',
      LeavingDate: '17/11/2019',
      rooms: [{roomtype: 'Family', roomnumbers: 2, },
        {roomtype: 'Imperial', roomnumbers: 3, }],
      totalprice: 700,
      personsB: 17,
      personsL: 23,
      personsD: 20,
      ophone: 748523912,
      colored: 'black',
      ofirstname: 'Popescu',
      olastname: 'George',
      oemail: 'popescu.george@palacehotel.com',
      requestdate: '25/10/2019',
      ratingvalue: 4.7,
    },
    {
      BookingRequestStatus: 'waiting',
      HotelName: 'Hotel Palace',
      hotelimage: '../assets/ex2.jpg',
      ArivingDate: '12/11/2019',
      LeavingDate: '17/11/2019',
      rooms: [{roomtype: 'Family', roomnumbers: 2, },
        {roomtype: 'Imperial', roomnumbers: 3, }],
      totalprice: 700,
      personsB: 15,
      personsL: null,
      personsD: 20,
      ophone: 748523912,
      colored: 'blue',
      ofirstname: 'Popescu',
      olastname: 'George',
      oemail: 'popescu.george@palacehotel.com',
      requestdate: '25/10/2019',
      ratingvalue: 4.7,
    },
    {
      BookingRequestStatus: 'denied',
      HotelName: 'Hotel Palace',
      hotelimage: '../assets/ex3.jpg',
      ArivingDate: '12/11/2019',
      LeavingDate: '17/11/2019',
      rooms: [{roomtype: 'Family', roomnumbers: 2, },
        {roomtype: 'Imperial', roomnumbers: 3, }],
      totalprice: 700,
      personsB: null,
      personsL: null,
      personsD: null,
      ophone: 748523912,
      colored: 'red',
      ofirstname: 'Popescu',
      olastname: 'George',
      oemail: 'popescu.george@palacehotel.com',
      requestdate: '25/10/2019',
      ratingvalue: 4.7,
    },
  ]
;
