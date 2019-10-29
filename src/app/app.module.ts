import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {LoaderComponent} from './components/loader/loader.component';

import {PortalComponent} from './components/portal/portal.component';

import {SignupComponent} from './components/signup/signup.component';
import {CartComponent} from './components/signup/cart/cart.component';
import {CustomerComponent} from './components/signup/customer/customer.component';
import {PaymentComponent} from './components/signup/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    LoaderComponent,
    PortalComponent,
    SignupComponent,
    CartComponent,
    CustomerComponent,
    PaymentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
