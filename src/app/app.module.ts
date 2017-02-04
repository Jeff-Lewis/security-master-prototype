import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { CusipCardComponent } from './components/cusip/cusip-card/cusip-card.component';
import { CusipDetailComponent } from './components/cusip/cusip-detail/cusip-detail.component';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SetupRequestDetailComponent } from './components/setup-request/setup-request-detail/setup-request-detail.component';
import { SetupRequestCardComponent } from './components/setup-request/setup-request-card/setup-request-card.component';

import { CusipService } from './services/cusip.service';
import { SetupRequestsService } from './services/setup-requests.service'
import { WorkInProgressService } from './services/work-in-progress.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  
  declarations: [
    DashboardComponent,
    MainLayoutComponent,
    SetupRequestDetailComponent,
    SetupRequestCardComponent,
    WorkInProgressComponent,
    CusipCardComponent,
    CusipDetailComponent,
  ],
  
  providers: [
    CusipService,
    SetupRequestsService,
    WorkInProgressService
  ],
  
  bootstrap: [MainLayoutComponent]
})

export class AppModule { }
