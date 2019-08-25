import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../user/login/login.component";
import {AddUserComponent} from "../user/register-user/register-user.component";
import {ForgotPasswordComponent} from "../user/forgot-password/forgot-password.component";
import {PhoneNumberComponent} from '../user/phone-number/phone-number.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {BookPageComponent} from '../book-page/book-page.component';
import {OwnerComponent} from '../owner/owner.component';
import {UserBookingsComponent} from '../user-bookings/user-bookings.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'phoneNumber', component: PhoneNumberComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'bookPage', component: BookPageComponent},
  {path: 'ownerPage', component: OwnerComponent},
  {path: 'userBookTable', component: UserBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
