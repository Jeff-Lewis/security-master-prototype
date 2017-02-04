import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { CusipDetailComponent }         from './components/cusip/cusip-detail/cusip-detail.component';
import { DashboardComponent }           from './components/dashboard/dashboard.component';
import { WorkInProgressComponent }      from './components/work-in-progress/work-in-progress.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cusip/:cusip', component: CusipDetailComponent },
  { path: 'home',   component: DashboardComponent },
  { path: 'wip',    component: WorkInProgressComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}