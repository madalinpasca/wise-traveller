import { Component, OnInit } from '@angular/core';
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
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['HotelName', 'ArivingDate', 'LeavingDate', 'BookingRequestStatus'];
  expandedElement: BookingDetails | null;
  constructor() { }

  ngOnInit() {
  }

}


export interface BookingDetails {
  HotelName: string;
  BookingRequestStatus: string;
  ArivingDate: string;
  LeavingDate: string;
  roomtype: string;
  roomnumbers: number;
  totalprice: number;
  personsB: number;
  personsL: number;
  personsD: number;
  colored: string;
}
const ELEMENT_DATA: BookingDetails[] = [
  {
    BookingRequestStatus: 'waiting',
    HotelName: 'Hotel Wise',
    ArivingDate: '25/08/2019',
    LeavingDate: '01/09/2019',
    roomtype: 'Family rooms',
    roomnumbers: 2,
    totalprice: 550,
    personsB: 15,
    personsL: 10,
    personsD: 15,
    colored: 'blue',
  }, {
    BookingRequestStatus: 'aproved',
    HotelName: 'Hotel Palace',
    ArivingDate: '12/11/2019',
    LeavingDate: '17/11/2019',
    roomtype: `Imperial rooms`,
    roomnumbers: 2,
    totalprice: 700,
    personsB: 17,
    personsL: 23,
    personsD: 20,
    colored: 'lime',
},
];
