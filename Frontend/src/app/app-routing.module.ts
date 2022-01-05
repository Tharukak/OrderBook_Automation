import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicGridviewComponent } from './dynamic-gridview/dynamic-gridview.component';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'operation', component: DynamicGridviewComponent},
    { path: 'merchant', component: DynamicGridviewComponent},
    { path: 'reports', component: DynamicGridviewComponent},
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
