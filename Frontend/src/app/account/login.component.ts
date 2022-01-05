import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { LoginService } from '../../../../backend/src/user-login/user-login.service';

@Component({ templateUrl: 'login.component.html', })
export class LoginComponent implements OnInit {
    [x: string]: any;
    form: FormGroup;
    loading = false;
    submitted = false;
    
    loginForm: Observable<[]>;
    formBuilder: any;
    alertService: any;
    constructor(private router:Router,private authenticationService:AuthService, private loginService: LoginService) {
      if (this.authenticationService.userValue) {
        this.authenticationService.navigateUser()
      }
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        // this.loginForm = this.loginService.getLoginForms();
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
