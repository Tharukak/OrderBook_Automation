import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class orderbookdetailsservice {


    constructor(
        private router: Router,
        private http: HttpClient
    )   
    {

    }

    orderdetails() {
        return this.http.get('http://localhost:3000/orderbook-details/orderdetails')      
    }
  
}
