import { Component, OnInit, Input} from '@angular/core';
import { EventDataService } from '../../services/event-data.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { Router } from '@angular/router';
import { EventDetailsModel } from '../../EventDetailsModel';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  // @Input() Event : EventDetailsModel;
  Event : EventDetailsModel;
  selectedEvent:any;
  titleOfPage : string;
  constructor(private route: ActivatedRoute,private eventData:EventDataService, private titleService: Title ) {
    this.getTitleNow();
   }

  ngOnInit() {
    this.getDetails();
  }

  getTitleNow() {
    this.titleOfPage = "EventDetails";
    this.titleService.setTitle(this.titleOfPage);
  }

  getDetails(): void {
    const eventId = +this.route.snapshot.paramMap.get('eventId');
    this.eventData.getEventDetails(eventId)
    .subscribe((event) => 
    {
      this.Event = event;
      console.log(this.Event);
      if(this.Event.Status===true && this.Event.MessageId===0){
        this.selectedEvent=this.Event.Results.Table1[0];
        console.log(this.selectedEvent);
      }
      else {
        alert("Error in getting event details");
      }
    });
  }

}
