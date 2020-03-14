import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartsComponent } from './charts/charts.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
      { path: 'utilities', loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule) }
    ], canActivate: [AuthGuard]
  },
  { path: 'login2', component: Login2Component },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
