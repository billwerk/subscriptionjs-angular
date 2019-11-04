import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';

import BillwerkAPI from 'billwerk/dist';

@Injectable({
  providedIn: 'root'
})
export class BillwerkApiService {

  apiService = new BillwerkAPI(environment.clientId, environment.clientSecret, window.location.host, '/api/v1', false);

  constructor() {
  }

  get Plans() {
    return this.apiService.getPlans();
  }

  get PlanVariants() {
    return this.apiService.getPlanVariants();
  }
}
