import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';

import BillwerkAPI from 'billwerk/dist';

@Injectable({
  providedIn: 'root'
})
export class BillwerkApiService {

  apiService = new BillwerkAPI(environment.clientId, environment.clientSecret, environment.billwerkHost, '/api/v1');

  constructor() {
  }

  get PlanVariants() {
    return this.apiService.getPlanVariants();
  }
}
