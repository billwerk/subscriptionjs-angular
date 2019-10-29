import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentService;

  constructor() {
  }

  get service() {
    return this.paymentService;
  }

  get paymentMethods() {
    return this.paymentService.getAvailablePaymentMethodEnum();
  }

  init(providerReturnUrl: string): Observable<any> {
    const subject$ = new ReplaySubject();

    this.paymentService = new SubscriptionJS.Payment(
      {
        publicApiKey: environment.publicApiKey,
        providerReturnUrl
      },
      (result) => subject$.next(result),
      (error) => subject$.error(error)
    );

    return subject$.asObservable();
  }
}
