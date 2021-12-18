import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { FlightstatusComponent } from './flightstatus/flightstatus.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CancellationComponent } from './cancellation/cancellation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    LoginpageComponent,
    SignupComponent,
    FlightstatusComponent,
    AdminComponent,
    BookingFormComponent,
    DeleteflightComponent,
    CancellationComponent,
    AdminloginComponent,
    SelectseatComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
