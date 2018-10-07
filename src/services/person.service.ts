import { Injectable } from "@angular/core";
import { IPerson } from "../models/person.model";

@Injectable()
export class PersonService {
    getPerson(): IPerson {
        return {
            name: 'Saddam Bilalov',
            email: 'saddam.bilalov@gmail.com'
        };
    }

    getPeople(): IPerson[] {
        return [{
            id: 1,
            name: 'Saddam Bilalov',
            email: 'saddam.bilalov@gmail.com'
        }, {
            id: 2,
            name: 'Sevinj Azizli',
            email: 'sevinj.azizli@gmail.com'
        }];
    }
}