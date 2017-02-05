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

import { CusipService } from './services/cusip.service';
import { HttpApiService } from './services/http-api.service';
import { WorkInProgressService } from './services/work-in-progress.service';
import { ActivityComponent } from './components/activity/activity.component';
import { EmailComponent } from './components/email/email.component';

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
    WorkInProgressComponent,
    CusipCardComponent,
    CusipDetailComponent,
    ActivityComponent,
    EmailComponent,
  ],
  
  providers: [
    CusipService,
    HttpApiService,
    WorkInProgressService
  ],
  
  bootstrap: [MainLayoutComponent]
})

export class AppModule { }
