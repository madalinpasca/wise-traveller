import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {RegisterDto} from "../../domain/RegisterDto";
import {IdWrapper} from "../../domain/IdWrapper";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class AddUserComponent implements OnInit {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phoneNumber: string;
  file: File;
  imageSrc: string | ArrayBuffer;
  imageHeight: number;
  imageWidth: number;


  constructor(private userService: UserService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {}

  addUser() {
    const register = new RegisterDto();
    register.email = this.email;
    register.password = this.password;
    register.phoneNumber = this.phoneNumber;
    register.firstName = this.firstname;
    register.lastName = this.lastname;
    this.userService.addUser(register).subscribe((id: IdWrapper) => {
      this.userService.uploadProfilePicture(this.file, id.id).subscribe(()=>{
          this.router.navigate(['login']).finally();
        },
        () => {
          this.displayError("Registration failed");
        })
      },
      () => {
        this.displayError("Registration failed");
      }
    );
  }

  private displayError(message: string) {
    this.snackBar.open(message, "Error", {
      duration: 6000,
      panelClass: "red-snackbar"
    });
  }

  uploadFile(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.file = fileList.item(0);
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
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
