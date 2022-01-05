import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls:['app.component.css' ]})
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
//     constructor(private msalService:MsalService){

//     }

//     isLoggedIn ():boolean{
//       return this.msalService.instance.getActiveAccount()!= null
//     }
//     Login(){
//       this.msalService.loginPopup().subscribe((response: AuthenticationResult)=>{
//         this.msalService.instance.setActiveAccount(response.account)
//       })
//     }
//     Logout(){
//       this.msalService.logout();
//     }
 }
