import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { AuthService } from '@app/_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({ templateUrl: 'login.component.html', providers: [JwtHelperService] })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        private AuthService: AuthService

    ) { }



    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            //password: ['', Validators.required]
        });
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
        this.AuthService.login({ 'username': this.f.username.value })
            .pipe(first())
            .subscribe({
                next: () => {

                    if (this.AuthService.userValue) {
                        console.log('Tessst');
                        this.AuthService.navigateUser();
                    }
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
