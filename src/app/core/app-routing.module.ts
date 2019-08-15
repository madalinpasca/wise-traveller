import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
// import {AddGroupComponent} from "../group/add-group/add-group.component";
import {AddUserComponent} from "../user/register-user/register-user.component";
import {ForgotPasswordComponent} from "../user/forgot-password/forgot-password.component";
import {PhoneNumberComponent} from '../user/phone-number/phone-number.component';
import {HomePageComponent} from '../questionnaire/home-page/home-page.component';
import {AddQuestionnaireToGroupComponent} from "../questionnaire/add-questionnaire-to-group/add-questionnaire-to-group.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'addGroup', component: AddGroupComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'phoneNumber', component: PhoneNumberComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'addQuestionnaireToGroup', component: AddQuestionnaireToGroupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
