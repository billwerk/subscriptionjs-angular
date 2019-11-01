import {Component, Input, OnInit} from '@angular/core';

import {CreditCardPayment} from '../../../models/payment';
import {PaymentService} from '../../../services/payment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() payment: CreditCardPayment;

  ExpiryMonths: string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  ExpiryYears: string[] = [
    '2019',
    '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029',
    '2030'
  ];

  constructor(private router: Router,
              private paymentService: PaymentService) {
  }

  ngOnInit() {
    const providerReturnUrl = this.router.serializeUrl(this.router.parseUrl('/signup'));
    this.paymentService.init(providerReturnUrl)
      .subscribe(
        () => {
          console.log(`PSP initialization completed.`);
          console.log(this.paymentService.paymentMethods);
        },
        error => alert(`Error! PSP initialization failed. [${error}]`)
      );
  }

}
