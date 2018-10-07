import { Injectable } from "@angular/core";
import { IPerson } from "../models/person.model";

@Injectable()
export class UserService {
    getUserById(id?: number): IPerson {
        return this.getUsers().find(_=>_.id == id);
    }

  getUsers(): IPerson[] {
    return [{
      id: 1,
      name: 'Saddam Bilalov',
      email: 'saddam.bilalov@gmail.com'
    }, {
      id: 2,
      name: 'Sevinj Azizli',
      email: 'sevinj.azizli@gmail.com'
    }
    ];
  }
}