import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SetupRequestDetailComponent } from './components/setup-request/setup-request-detail/setup-request-detail.component';
import { SetupRequestCardComponent } from './components/setup-request/setup-request-card/setup-request-card.component';

import { SetupRequestsService } from './services/setup-requests.service'
import { WorkQueueGroupService } from './services/work-queue-group.service';
import { WorkInProgressService } from './services/work-in-progress.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  
  declarations: [
    WorkInProgressComponent,
    MainLayoutComponent,
    DashboardComponent,
    SetupRequestDetailComponent,
    SetupRequestCardComponent    
  ],
  
  providers: [
    WorkQueueGroupService,
    SetupRequestsService,
    WorkInProgressService
  ],
  bootstrap: [MainLayoutComponent]
})
export class AppModule { }
