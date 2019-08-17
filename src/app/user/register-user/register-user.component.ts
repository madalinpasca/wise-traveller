import {Component, OnInit} from '@angular/core';
// import {MatSnackBar} from "@angular/material";
import {UserService} from "../../service/user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class AddUserComponent implements OnInit {
  name: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phoneNumber: string;
  file: File;
  imageSrc: string | ArrayBuffer;
  imageHeight: number;
  imageWidth: number;


  constructor(private userService: UserService
              /*private snackBar: MatSnackBar*/) {
  }

  ngOnInit() {}

  addUser() {
    this.userService.uploadProfilePicture(this.file).subscribe(
      ()=>{
        console.log("OK")
      },(error: HttpErrorResponse)=>{
        console.log("NOT OK" + error.message)
      }
    )
  }

  // private displayPopup(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 6000
  //   });
  // }

  uploadFile(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.file = fileList.item(0);
      const reader = new FileReader();
      reader.onload = () => {
        var img = new Image();
        img.onload = () => {
          if (img.width > img.height) {
            this.imageWidth = 100;
            this.imageHeight = 100 * img.height / img.width;
          } else {
            this.imageWidth = 100 * img.width / img.height;
            this.imageHeight = 100;
          }
          this.imageSrc = reader.result;
        };
        img.src = reader.result.toString();
      };

      reader.readAsDataURL(this.file);
    }
  }
}
