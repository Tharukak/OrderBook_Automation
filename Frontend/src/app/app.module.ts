import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
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
import {MsalModule, MsalService, MSAL_INSTANCE} from '@azure/msal-angular';
import { AccountModule } from './account/account.module';
import { JwtModule } from '@auth0/angular-jwt';
import { DynamicUpdateFormComponent } from './dynamic-update-form/dynamic-update-form.component';;
import { HeaderComponent } from './header/header.component'
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { Authority } from '@azure/msal-common';;
import { MerchantFormComponent } from './merchant-form/merchant-form.component';
import { DynamicApprovalFormComponent } from './dynamic-approval-form/dynamic-approval-form.component'
;
import { ReportFormComponent } from './report-form/report-form.component'
export function MSALInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId:"d9f0ed42-85df-4382-b4d2-169b98e0ac3d",
      redirectUri:"http://localhost:4200/account/login",
      authority: "https://login.microsoftonline.com/ea1f9c15-7f32-4dfa-b662-cacea1f61d0f/"
    }
  })
}


export function tokenGetter() {

    const user = localStorage.getItem("user");
  
    let token = null;
  
    try
  
    {
  
      if(user != null){
  
        token = JSON.parse(user).token;
  
      }
  
    }
  
    catch(ex){
  
      console.log(ex)
  
    }
  
  
  
    return token;
  
  }
  

@NgModule({
    imports: [
       MsalModule,
        FormsModule,
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
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

    MsalModule,
    AccountModule,
    JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: [],
          disallowedRoutes: []
        },
      }),

    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        DynamicGridviewComponent
,
        DynamicUpdateFormComponent
,
        HeaderComponent,
        MerchantFormComponent
,
        DynamicApprovalFormComponent ,
        ReportFormComponent       
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: MSAL_INSTANCE, useFactory:MSALInstanceFactory},
        MsalService,

        // provider used to create fake backend
        fakeBackendProvider
       
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class AppModule { };
