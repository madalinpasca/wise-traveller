import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {CustomMaterialModule} from "./core/material.module";
import {AppRoutingModule} from "./core/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./service/UserService";
// import { AddGroupComponent } from './group/add-group/add-group.component';
import {GroupService} from "./service/group.service";
import { AddUserComponent } from './user/register-user/register-user.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import {HomePageComponent} from './questionnaire/home-page/home-page.component';
import { AddQuestionnaireToGroupComponent } from './questionnaire/add-questionnaire-to-group/add-questionnaire-to-group.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, AuthService} from 'angular5-social-login';
import {getAuthServiceConfigs} from './socialloginConfig';
import { PhoneNumberComponent } from './user/phone-number/phone-number.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // AddGroupComponent,
    AddUserComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    AddQuestionnaireToGroupComponent,
    PhoneNumberComponent,
    MainNavComponent,
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
    MatListModule
  ],
  providers: [UserService, GroupService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
