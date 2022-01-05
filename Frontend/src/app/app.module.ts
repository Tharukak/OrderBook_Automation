﻿import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor} from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { DynamicGridviewComponent } from './dynamic-gridview/dynamic-gridview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';




import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';

import { MatMenuModule } from '@angular/material/menu';

import { MatTableModule } from '@angular/material/table';

import { MatSortModule } from '@angular/material/sort';


import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatPaginatorModule } from '@angular/material/paginator';

import { DynamicMatTableModule } from 'dynamic-mat-table';

<<<<<<< HEAD

import { FooterComponent } from './footer/footer.component';

import{ MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';




=======
import {MsalModule} from '@azure/msal-angular';;
import { FooterComponent } from './footer/footer.component'
>>>>>>> parent of b019b10... Merge branch 'master' of https://github.com/Tharukak/OrderBook_Automation

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSliderModule,
        CommonModule,
        MatTabsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    MatListModule,

    MatMenuModule,

    MatTableModule,

    MatSortModule,

    MatFormFieldModule,

    MatInputModule,

    MatPaginatorModule,

    DynamicMatTableModule,

    MsalModule

    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        DynamicGridviewComponent,
        FooterComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class AppModule { };