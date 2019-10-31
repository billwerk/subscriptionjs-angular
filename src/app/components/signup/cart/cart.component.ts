import {Component, Input, OnInit} from '@angular/core';

import {BillwerkApiService} from '../../../services/billwerk-api.service';

import {Cart} from '../../../models/cart';

interface PlanVariant {
  id: string;
  description: string;
  originPlan: any;
  originPlanVariant: any;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart;

  PlanVariants: PlanVariant[] = [];

  constructor(private billwerkApiService: BillwerkApiService) {
  }

  ngOnInit() {
    this.billwerkApiService.Plans.then(plans => {
      this.billwerkApiService.PlanVariants.then(planVariants => {
        this.PlanVariants = this.populatePlanVariants(plans, planVariants);

        console.log(`PlanVariants: `, this.PlanVariants);
      });
    });
  }

  private populatePlanVariants(plans, planVariants): PlanVariant[] {
    const getPlan = planVariant => plans.find(plan => plan.Id === planVariant.PlanId);
    return planVariants.map(planVariant => this.composePlanVariant(getPlan(planVariant), planVariant));
  }

  private composePlanVariant(plan, planVariant): PlanVariant {
    return {
      id: planVariant.Id,
      description: `${plan.Name._c} (${planVariant.Description._c})`,
      originPlan: plan,
      originPlanVariant: planVariant
    };
  }
}
