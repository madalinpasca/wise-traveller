import {Component} from '@angular/core';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['dialog-content-example-dialog.css']

})
export class DialogContentExampleDialogComponent {
  latitude = 46.7598893;
  longitude = 23.534809;
  locationChosen = false;
  public locationname: string;
  public aboutlocation: string;
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  // items: Array<any> = [];
  images = ['../assets/ex1.jpg', '../assets/ex2.jpg', '../assets/ex3.jpg'];

  constructor() {
    // const images = ['../assets/ex1.jpg', '../assets/ex2.jpg', '../assets/ex3.jpg', '../assets/ex4.jpg'];
    // images.forEach((image, index) => {
    //   const img = new Image();
    //   img.onload = () => {
    //     this.items[index] = {};
    //     this.items[index].height = 300;
    //     this.items[index].width = 300 * img.width / img.height;
    //     this.items[index].name = image;
    //   };
      // img.src = image;
    // });
  }
  onChoseLocation(event) {
    // console.log(event);
  this.latitude = event.coords.lat;
  this.longitude = event.coords.lng;
  this.locationChosen = true;

  }
}


