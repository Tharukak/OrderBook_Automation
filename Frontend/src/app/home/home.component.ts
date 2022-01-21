import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html', styleUrls:['home.component.css' ] })
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService, private router: Router) {
        this.user = this.accountService.userValue;
    }

    onNo1Click(): void {
        //this.router.navigate(['/Admin']);
        this.accountService.logout();
      }

    onNo2Click(): void {
        //this.router.navigate(['/planning']);
        this.accountService.logout();
    }

    onNo3Click(): void {
        //this.router.navigate(['/merchant']);
        this.accountService.logout();
    }  
}