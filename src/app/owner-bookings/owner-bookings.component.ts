import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {OwnwerBookingDetails} from '../owner-bookings/owner-bookings.component';

@Component({
  selector: 'app-owner-bookings',
  templateUrl: './owner-bookings.component.html',
  styleUrls: ['./owner-bookings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OwnerBookingsComponent implements OnInit {
  currentRate = 3.14;
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['ClientName', 'ArivingDate', 'LeavingDate', 'BookingRequestDate'];
  expandedElement: OwnwerBookingDetails | null;

  constructor() {
  }

  ngOnInit() {
  }
}

export interface OwnwerBookingDetails {
  ClientName: string;
  hotelimage: string;
  BookingRequestDate: string;
  ArivingDate: string;
  LeavingDate: string;
  requestdate: string;
  totalprice: number;
  personsB: number;
  personsL: number;
  personsD: number;
  uemail: string;
  uphone: number;
  rooms: any;
  ratingvalue: number;
}

const ELEMENT_DATA: OwnwerBookingDetails[] = [
    {
      BookingRequestDate: '27/08/2019',
      ClientName: 'Popescu George',
      hotelimage: '../assets/ex3.jpg',
      ArivingDate: '12/11/2019',
      LeavingDate: '17/11/2019',
      rooms: [{roomtype: 'Family', roomnumbers: 2,},
        {roomtype: 'Imperial', roomnumbers: 3,}],
      totalprice: 700,
      personsB: null,
      personsL: 23,
      personsD: null,
      uphone: 748523912,
      uemail: 'popescu.george@palacehotel.com',
      requestdate: '25/10/2019',
      ratingvalue: 4.7,
    },
  ];
