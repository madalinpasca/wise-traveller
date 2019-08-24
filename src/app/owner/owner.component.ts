import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';
import {last} from 'rxjs-compat/operator/last';
import {findLast} from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  latitude = 35.54210396415144;
  longitude = -6.627968216632894;
  locationChosen = false;
  step = 0;
  tabname: string;
  tabs = [];
  selected = new FormControl(0);
  urls = new Array<string>();
  facilities = new FormControl();
  facilitiList: string[] = ['TV', 'Balcony', 'Bathroom in the room',
    'Common bathroom', 'Room service', 'Refrigerator', 'Mini-bar'];
  forbidens = new FormControl();
  forbidenList: string[] = ['Smoking', 'Pets', 'Alcohol', 'Drugs',
    'Guns', 'Sport equipment', 'Boots with mud', 'Noise'];
    addTab(selectAfterAdding: boolean) {
    this.tabs.push(this.tabname);
    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(this.tabs.length - 1, 1);
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
          console.log(event.target.result);
          this.urls.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
    removePicture(index: number) {
    this.urls.splice(this.urls.length - 1, 1);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onChoseLocation(event) {
    console.log(event);
    // this.latitude = event.coords.lat;
    // this.longitude = event.coords.lng;
    // this.locationChosen = true;

  }
}
