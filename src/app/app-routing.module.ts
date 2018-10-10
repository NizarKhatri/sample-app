import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
   { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
   { path: 'dashboard', canActivate: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule'}
//   {
//     path: 'candidate',
//     //canActivate: [AuthGuard],
//     loadChildren: './candidate/candidate.module#CandidateModule',
//   },
//   { path: 'error', component: SomethingBadHappenedComponent },
//   { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
