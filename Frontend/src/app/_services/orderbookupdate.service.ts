import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../_models/transaction';
import { updateDetails } from '../_models/updateDetails';



@Injectable({ providedIn: 'root' })

export class orderbookupdateservice{
    constructor(
        private router: Router,
        private http: HttpClient
    )   
    {}

    

    addDetails(updateDetails:updateDetails) {
        //console.log(updateDetails);
        return this.http.post<Transaction>('http://localhost:3000/orderbook-update/updateDetails',updateDetails);      
    }
  
    getApprovalDetails(orderId):any {
        //console.log(orderId);
        return this.http.get('http://localhost:3000/orderbook-update/approveDetails/'+orderId);    

 }
}
