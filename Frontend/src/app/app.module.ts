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

<<<<<<< HEAD
import{ MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export function MSAL_InstanceFactory():IPublicClientApplication{
  return new PublicClientApplication ({
    auth:{
      clientId:'41be05d2-eccd-44ee-bed3-d0c1f8fb8819',
      redirectUri:'http://localhost:4200'
    }
  })
}
=======
import {MsalModule} from '@azure/msal-angular';
>>>>>>> 55a8c2e8a533f23d0892315de333a7116ea5c0cc

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
        DynamicGridviewComponent
    ],
    providers: [
<<<<<<< HEAD
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: MSAL_INSTANCE,useFactory:MSAL_InstanceFactory},
        MsalService,
=======
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
>>>>>>> 55a8c2e8a533f23d0892315de333a7116ea5c0cc
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class AppModule { };
