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
import {MsalModule} from '@azure/msal-angular';
import { AccountModule } from './account/account.module';
import { JwtModule } from '@auth0/angular-jwt';
import { DynamicUpdateFormComponent } from './dynamic-update-form/dynamic-update-form.component';;
import { HeaderComponent } from './header/header.component'


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
        HeaderComponent
        
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
       
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class AppModule { };
