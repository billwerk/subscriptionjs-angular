import {Component, Input, OnInit} from '@angular/core';

import {BillwerkApiService} from '../../../services/billwerk-api.service';

import {Cart} from '../../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart;

  PlanVariants: { id: string; name: string }[] = [
    {id: '5da85d70400b1e189c61d5b1', name: 'My Product - Basic (monatliche Laufzeit)'},
    {id: '5da85d70400b1e189c61d5b5', name: 'My Product - Basic (jährliche Laufzeit)'}
  ];

  constructor(private billwerkApiService: BillwerkApiService) {
  }

  ngOnInit() {
    this.billwerkApiService.PlanVariants.then(result => console.log(result));
  }

}
