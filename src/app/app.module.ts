import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

import { EventDataService } from './services/event-data.service';

const routes : Routes = [
  { path:'', redirectTo:'eventList',pathMatch:'full'},
  //{ path:'eventDetails', component: EventDetailsComponent},
  { path:'eventDetails/:eventId/:EventUrl', component: EventDetailsComponent},
  { path:'eventList', component: EventListComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EventDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
