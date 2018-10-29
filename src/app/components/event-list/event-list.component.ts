import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../../services/event-data.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  titleOfPage : string;
  eventsList:any[] =[];

  constructor(private eventData:EventDataService, private titleService: Title ) { 
    this.getTitleNow();
  }

  ngOnInit() {
    this.getList();
  }

  getTitleNow() {
    this.titleOfPage = "EventList";
    this.titleService.setTitle(this.titleOfPage);
  }

  getList() {
    let myObj :any = {
      "ListType":"Full",
      "LatLong":"Point(-84.3879824 33.7489954)"
    };

    this.eventData.getEventList(myObj)
    .subscribe((result:any) =>{
      console.log(result);
      if(result.Status===true && result.MessageId===0) {
        for(let i=0;i<15;i++) {
          this.eventsList.push(result.Results[i]);
        }
      }
      else {
        alert("Something Bad Happen can't show results");
      }
    }); 
  }
}
