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

import { WorkQueueGroupService } from './services/work-queue-group.service';

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
    DashboardComponent    
  ],
  
  providers: [WorkQueueGroupService],
  bootstrap: [MainLayoutComponent]
})
export class AppModule { }
