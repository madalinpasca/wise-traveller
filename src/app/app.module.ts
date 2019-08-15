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
import { AssignUserToGroupComponent } from './user/assign-user-to-group/assign-user-to-group.component';
import { AddQuestionnaireComponent } from './questionnaire/add-questionnaire/add-questionnaire.component';
import { AddQuestionnaireToGroupComponent } from './questionnaire/add-questionnaire-to-group/add-questionnaire-to-group.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, AuthService} from 'angular5-social-login';
import {getAuthServiceConfigs} from './socialloginConfig';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // AddGroupComponent,
    AddUserComponent,
    AssignUserToGroupComponent,
    AddQuestionnaireComponent,
    AddQuestionnaireToGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [UserService, GroupService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
