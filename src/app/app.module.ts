import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { FormsModule } from "@angular/forms";
import { CustomMaterialModule } from "./core/material.module";
import { AppRoutingModule } from "./core/app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./service/user.service";
import { AddUserComponent } from './user/register-user/register-user.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SocialLoginModule, AuthServiceConfig } from 'angular5-social-login';
import { getAuthServiceConfigs} from './socialloginConfig';
import { PhoneNumberComponent } from './user/phone-number/phone-number.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DialogContentExampleDialogComponent} from './home-page/dialog-view-dialog/dialog-content-example-dialog';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    PhoneNumberComponent,
    MainNavComponent,
    DialogContentExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,
    HttpClientModule,
    SocialLoginModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // Ng2CarouselamosModule,
    NgbModule
  ],
  providers: [UserService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogContentExampleDialogComponent
  ]
})
export class AppModule { }
