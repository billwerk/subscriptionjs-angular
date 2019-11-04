import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SignupService} from '../../services/signup.service';

import {Cart} from '../../models/cart';
import {Customer} from '../../models/customer';
import {Payment, PaymentKind} from '../../models/payment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  cart: Cart = {planVariantId: null};
  customer: Customer = {firstName: null, lastName: null};
  payment: Payment = {bearer: null, cardNumber: null, cardHolder: null, expiryMonth: null, expiryYear: null, cvc: null, accountHolder: null, bic: null, iban: null};

  constructor(private router: Router,
              private signupService: SignupService) {
  }

  ngOnInit() {
    const providerReturnUrl = this.router.serializeUrl(this.router.parseUrl('/portal'));
    this.signupService.init(providerReturnUrl)
      .subscribe(
        () => console.log(`PSP initialization completed.`),
        error => alert(`Error! PSP initialization failed. [${error}]`)
      );
  }

  isDisableSubmit(): boolean {
    return !this.isValidCart() ||
      !this.isValidCustomer() ||
      !this.isValidPayment();
  }

  onSubmit() {
    this.subscribe();
  }

  private subscribe() {
    console.log(`Cart: `, this.cart);
    console.log(`Customer: `, this.customer);
    console.log(`Payment: `, this.payment);

    this.signupService.subscribe(this.cart, this.customer, this.payment)
      .subscribe(
        () => this.router.navigate(['/portal']).then(() => alert(`Your subscription was successful!`)),
        error => {
          alert(`Error! Interactive signup failed. [${error.errorMessage}]`);
          this.router.navigate(['/signup']);
        }
      );

    this.router.navigate(['/loader']).then(() => console.log('loader'));
  }

  private isValidCart(): boolean {
    return !!this.cart.planVariantId;
  }

  private isValidCustomer(): boolean {
    return !!this.customer.firstName && !!this.customer.lastName;
  }

  private isValidPayment(): boolean {
    if(this.payment.bearer == PaymentKind.CreditCard)
      return !!this.payment.cardNumber &&
        !!this.payment.cardHolder &&
        !!this.payment.expiryMonth &&
        !!this.payment.expiryYear &&
        !!this.payment.cvc;
    else if(this.payment.bearer == PaymentKind.Debit)
      return !!this.payment.accountHolder &&
        !!this.payment.iban
        //BIC is not neccessary
  }
}
