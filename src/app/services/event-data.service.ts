import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventDetailsModel } from '../EventDetailsModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  private eventListApi:string="https://www.vipsocio.com/api/vendor/getVendorList";
  private eventDetailsApi:string ="https://www.vipsocio.com/api/event/eventtickets/";
  constructor(private http: HttpClient) { }

  
  getEventList(myObj:any) {
    return this.http.post(this.eventListApi,myObj,httpOptions);
  }

  getEventDetails(eventId:any): Observable<EventDetailsModel> {
    const url = `${this.eventDetailsApi}/${eventId}`;
    return this.http.get<EventDetailsModel>(url,httpOptions);
  }
}
