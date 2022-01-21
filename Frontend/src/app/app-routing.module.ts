import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicGridviewComponent } from './dynamic-gridview/dynamic-gridview.component';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers/auth.guard';
import { ScopeGuard } from './_helpers/scope.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path : 'merchant', component: DynamicGridviewComponent, canActivate: [AuthGuard,ScopeGuard], data: { scopes: ["Date VPO Update"] }},
    {path : 'planning', component: DynamicGridviewComponent, canActivate: [AuthGuard,ScopeGuard], data: { scopes: ["Date VPO Update"] }},
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