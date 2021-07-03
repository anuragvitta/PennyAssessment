import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { FetchAllUsersResolver } from './resolvers/fetch-all-users.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { users: FetchAllUsersResolver },
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
