import { Component, Input } from "@angular/core";
import { IPerson } from "../models/person.model";

@Component({
    selector: 'json-view',
    templateUrl: '../views/event.component.html',
    styles: ['../css/event.component.css']
})
export class EventComponent{
  @Input() personInfo: IPerson;
}