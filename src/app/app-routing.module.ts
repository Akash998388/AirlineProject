import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { FlightstatusComponent } from './flightstatus/flightstatus.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: 'User', component: LoginpageComponent},
  {path: 'booking-form', component: BookingFormComponent},
  {path: 'loginpage', component: LoginpageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'flightstatus', component: FlightstatusComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'deleteflight', component: DeleteflightComponent},
  {path: 'cancellation', component: CancellationComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'selectseat', component: SelectseatComponent},
  {path: 'Payment', component: PaymentComponent}
  // { path: '', redirectTo: '/bookingform', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
