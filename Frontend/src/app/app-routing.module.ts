import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicGridviewComponent } from './dynamic-gridview/dynamic-gridview.component';

import { HomeComponent } from './home';
import { MerchantFormComponent } from './merchant-form/merchant-form.component';
import { AuthGuard } from './_helpers/auth.guard';
import { ScopeGuard } from './_helpers/scope.guard';
import { ReportFormComponent } from './report-form/report-form.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path : 'merchant', component: MerchantFormComponent, canActivate: [AuthGuard,ScopeGuard], data: { scopes: ["Approval"] }},
    {path : 'planning', component: DynamicGridviewComponent, canActivate: [AuthGuard,ScopeGuard], data: { scopes: ["Date VPO Update"] }},
    {path : 'report', component: ReportFormComponent, canActivate: [AuthGuard,ScopeGuard], data: { scopes: ["Report view"] }},
    //{ path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
