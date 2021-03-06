import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';


@Injectable({ providedIn: 'root' })
export class AuthService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient,
        public jwtHelper: JwtHelperService,
        private msalService: MsalService

    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public isAuthenticated(): boolean {
        const token = JSON.parse(localStorage.getItem('user'));
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token?.token);
    }
    navigateUser() {
        if (this.userSubject.value.scopes[0] == "Date VPO Update") this.router.navigate(['/planning']);
        if (this.userSubject.value.scopes[0] == "Report view") this.router.navigate(['/report']);
        if (this.userSubject.value.scopes[0] == "Approval") this.router.navigate(['/merchant']);
    }

    // login2(model){
    //     let headers = new HttpHeaders();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post('http://localhost:3000/user-login/userdetails',model,{headers:headers});
    //   }

    isLoggedIn(): boolean {
        return this.msalService.instance.getActiveAccount() != null
    }


    login(username) {
        //console.log(username)
        //let username: string;
        this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
            this.msalService.instance.setActiveAccount(response.account);
            console.log(response.account);
            username = response.account.username;
        });
        //console.log(username);
        return this.http.post<any>('http://localhost:3000/user-login/userdetails', username).pipe(map(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            } else {
                return false;
            }
        }));
    }

    logout() {
        // remove user from local storage to log user out
        this.msalService.logout();
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }
}