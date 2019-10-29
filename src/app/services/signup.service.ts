import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

import {PaymentService} from './payment.service';

import {Cart} from '../models/cart';
import {Customer} from '../models/customer';
import {Payment} from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupService = new SubscriptionJS.Signup();

  constructor(private paymentService: PaymentService) {
  }

  init(providerReturnUrl: string): Observable<any> {
    return this.paymentService.init(providerReturnUrl);
  }

  subscribe(cart: Cart, customer: Customer, payment: Payment): Observable<any> {
    const subject$ = new ReplaySubject();

    this.signupService.subscribe(
      this.paymentService.service,
      cart,
      customer,
      payment,
      (result) => subject$.next(result),
      (error) => subject$.error(error)
    );

    return subject$.asObservable();
  }
}
