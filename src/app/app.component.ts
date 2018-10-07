import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { IPerson } from '../models/person.model';

@Component({
  template: `
  <json-view [personInfo]="person"></json-view>
  <b>{{file | json}}</b>
  <br/>
  <b>{{file.size | filesize:'MB'}}</b>
  <p [hidden]="file.isActive">Welcome back!<p>
  <ul *ngFor = "let person of people">
    <li>
     <a [routerLink] = "['/user', person.id]">{{person.name}}</a>
    </li>
  </ul>

  Parent: {{ myCount }}
      <counter
        [count]="myCount"
        (change)="countChange($event)">
      </counter>      
  `
})
export class AppComponent implements OnInit {

  myCount: number = 10;
  countChange(event) {
    this.myCount = event;
  }

  person: IPerson;
  people: IPerson[];

  file: any;
  username: any;
  constructor(private personService: PersonService){  }
 
  ngOnInit(): void {
    this.file = { name: 'logo.svg', size: 2120109, type: 'image/svg', isActive: true };
    this.person = this.personService.getPerson();
    this.people = this.personService.getPeople();
    this.username = null;
  }
}